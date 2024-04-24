import "./App.css";
import { Box, Text, Button } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import RepositoryList from "./pages/RepositoryList";
import RepositoryDetails from "./pages/RepositoryDetails";
import ErrorPage from "./pages/ErrorPage";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./pages/ErrorBoundary";

// const Fallback = ({ error, resetErrorBoundary }) => {
//   // Call resetErrorBoundary() to reset the error boundary and retry the render.
//   return (
//     <div role="alert">
//       <Text>Something went wrong:</Text>
//       <Text style={{ color: "red" }}>{error.message}</Text>
//       <Button variants="primary" onClick={resetErrorBoundary}>
//         Reset
//       </Button>
//     </div>
//   );
// };

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Box
        width={{ xl: "80%", lg: "100%" }}
        paddingInline={{ xl: "0", lg: "50", md: "20", sm: "10", base: "5" }}
        margin="0 auto"
        paddingBlock={100}
      >
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route
            path="/RepositoryDetails/:repoName"
            element={<RepositoryDetails />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Box>
    </ErrorBoundary>
  );
  // return (
  //   <>
  //     <Box
  //       width={{ xl: "80%", lg: "100%" }}
  //       paddingInline={{ xl: "0", lg: "50", md: "20", sm: "10", base: "5" }}
  //       margin="0 auto"
  //       paddingBlock={100}
  //     >
  //       <Routes>
  //         <Route path="/" element={<RepositoryList />} />
  //         <Route
  //           path="/RepositoryDetails/:repoName"
  //           element={<RepositoryDetails />}
  //         />
  //         <Route path="*" element={<ErrorPage />} />
  //       </Routes>
  //     </Box>
  //   </>
  // );
}

export default App;
