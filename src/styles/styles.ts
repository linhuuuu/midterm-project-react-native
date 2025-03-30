import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor: "#fff",
   },
   darkContainer: {
      backgroundColor: "#000",
   },
   header: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#000",
   },
   darkHeader: {
      color: "#fff",
   },
   headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 16,
      backgroundColor: "#fff",
   },
   darkHeaderContainer: {
      backgroundColor: "#121212",
   },
   savedJobsText: {
      color: "#007BFF",
      fontSize: 16,
   },
   darkSavedJobsText: {
      color: "#007BFF",
   },
   listContent: {
      padding: 10,
   },
   card: {
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 15,
      marginBottom: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
   },
   darkCard: {
      backgroundColor: "#1e1e1e",
   },
   headerRow: {
      flexDirection: "row",
      alignItems: "center",
   },
   title: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#000",
   },
   darkTitle: {
      color: "#fff",
   },
   companyName: {
      fontSize: 14,
      color: "#666",
      marginBottom: 5,
      flexShrink: 1,
   },
   darkCompanyName: {
      color: "#ccc",
   },
   salary: {
      fontSize: 14,
      marginTop: 5,
      color: "#333",
      flex: 1,
   },
   darkSalary: {
      color: "#fff",
   },
   actionsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
   },
   actionButton: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      backgroundColor: "#007BFF",
      borderRadius: 40,
      marginTop: 10,
   },
   darkActionButton: {
      backgroundColor: "#0056b3",
   },
   actionText: {
      fontSize: 14,
      color: "#fff",
      textAlign: "center",
   },
   saveButton: {
      padding: 5,
      backgroundColor: "#f0f0f0",
      borderRadius: 5,
   },
   darkSaveButton: {
      backgroundColor: "#333",
   },
   saveButtonText: {
      fontSize: 14,
      color: "#333",
      textAlign: "center",
   },
   darkSaveButtonText: {
      color: "#fff",
   },
   noJobsContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   darkNoJobsContainer: {
    backgroundColor:"#000"
 },
   noJobsText: {
      fontSize: 18,
      color: "#666",
   },
   darkNoJobsText: {
      color: "#ccc",
   },
   contentContainer: {
      padding: 20,
   },
   subtitle: {
      fontSize: 18,
      color: "#666",
      marginBottom: 10,
   },
   darkSubtitle: {
      color: "#ccc",
   },
   detail: {
      fontSize: 16,
      marginBottom: 5,
      color: "#000",
   },
   darkDetail: {
      color: "#fff",
   },
   tagsContainer: {
      marginTop: 10,
   },
   tagsRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 5,
   },
   tagCircle: {
      backgroundColor: "#007BFF",
      borderRadius: 20,
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginRight: 8,
      marginBottom: 8,
   },
   darkTagCircle: {
      backgroundColor: "#0056b3",
   },
   tagText: {
      fontSize: 14,
      color: "#fff",
      textAlign: "center",
   },
   input: {
      height: 40,
      fontSize: 14,
      padding: 10,
      backgroundColor: "#fff",
      borderRadius: 10,
      marginBottom: 10,
      width: "100%",
      color: "#000",
   },
   darkInput: {
      backgroundColor: "#333",
      color: "#fff",
   },
   multilineInput: {
      height: 140,
      textAlignVertical: "top",
   },
   error: {
      color: "red",
      fontSize: 12,
      marginBottom: 10,
   },
   darkError: {
      color: "#ff4d4d",
   },
   button: {
      height: 50,
      backgroundColor: "#007BFF",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
   },
   darkButton: {
      backgroundColor: "#0056b3",
   },
   buttonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
   },
   logo: {
      width: 30,
      height: 30,
      borderRadius: 25,
      marginRight: 5,
   },
   linkButton: {
      backgroundColor: "#007BFF",
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 5,
      marginLeft: 10,
   },
   darkLinkButton: {
      backgroundColor: "#0056b3",
   },
   linkButtonText: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "bold",
   },
   switchContainer: {
      alignItems: "flex-end",
      paddingVertical: 10,
   },
});