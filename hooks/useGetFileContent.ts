import { useState, useEffect } from "react";
// import { getFileContent } from "../lib/fetchTools";

/**
 * Retrieves contents of files stored in S3
 * @param path
 * @param type
 * @returns A string with the file contents
 */
export function useGetFileContent(path: string | null, type: string) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fileContent = async () => {
      // TODO: Implement getFileContent
      // const response = await getFileContent(path, type);
      // setContent(response);
      setContent(null);
    };
    if (!!path) {
      fileContent();
    }
  }, [path, type]);
  return content;
}
