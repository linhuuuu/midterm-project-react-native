import React, { useState, createContext, ReactNode, useEffect, useCallback } from "react";
import axios from "axios";
import uuid from "react-native-uuid";

interface JobsFetched {
   id: string;
   title: string;
   description: string;
   mainCategory: string;
   applicationLink: string;
   companyName: string;
   companyLogo: string;
   jobType: string;
   workModel: string;
   seniorityLevel: string;
   minSalary?: number; 
   maxSalary?: number; 
   locations: string[];
   tags: string[];
}

type ContextProviderType = {
   jobs: JobsFetched[];
   error: string | null;
   refreshing: boolean;
   onRefresh: () => void; 
   focusID: string | null;
   setFocusID: (id: string | null) => void;
   savedJobs: string[];
   saveJobs: (item: string) => void;
   removeJobs: (item: string) => void;
   searchQuery: string;
   setSearchQuery: (query: string) => void;
   isDarkMode: boolean;
   toggleDarkMode: () => void;
};

interface ContextProviderProps {
   children: ReactNode;
}

export const Context = createContext<ContextProviderType>({
   jobs: [],
   error: null,
   refreshing: false,
   onRefresh: () => {},
   focusID: null,
   setFocusID: () => {},
   savedJobs: [],
   saveJobs: () => {},
   removeJobs: () => {},
   searchQuery: "",
   setSearchQuery: () => {},
   isDarkMode: false,
   toggleDarkMode: () => {},
});

export const JobsProvider: React.FC<ContextProviderProps> = ({ children }) => {
   const [jobs, setJobs] = useState<JobsFetched[]>([]);
   const [refreshing, setRefreshing] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);
   const [focusID, setFocusID] = useState<string | null>(null);
   const [savedJobs, setSavedJobs] = useState<string[]>([]);
   const [searchQuery, setSearchQuery] = useState<string>("");
   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
   const API_URL = "https://empllo.com/api/v1";

   const saveJobs = (saveJobID: string) => {
      if (savedJobs.find((item) => item === saveJobID)) return;
      setSavedJobs((prevItems) => [...prevItems, saveJobID]);
   };

   const removeJobs = (saveJobID: string) => {
      setSavedJobs((savedJobItems) => savedJobItems.filter((item) => item !== saveJobID));
   };

   const fetchData = async (): Promise<void> => {
      try {
         setError(null);
         const response = await axios.get<{ jobs: JobsFetched[] }>(API_URL);

         const joblist = response.data.jobs.map((job: JobsFetched) => ({
            ...job,
            id: job.id ?? uuid.v4(),
            minSalary: job.minSalary ?? 0, 
            maxSalary: job.maxSalary ?? 0, 
         }));

         setJobs(joblist);
      } catch (err) {
         setError("Error fetching data");
         console.error("Error fetching data:", err);
      }
   };

   const onRefresh = useCallback(async () => {
      setRefreshing(true);
      await fetchData();
      setRefreshing(false);
   }, []);

   useEffect(() => {
      fetchData();
   }, []);

   const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
   };

   return (
      <Context.Provider
         value={{
            jobs,
            error,
            refreshing,
            onRefresh, 
            focusID,
            setFocusID,
            savedJobs,
            saveJobs,
            removeJobs,
            searchQuery,
            setSearchQuery,
            isDarkMode,
            toggleDarkMode,
         }}
      >
         {children}
      </Context.Provider>
   );
};