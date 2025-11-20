import { useState, useEffect } from "react";
// import { getFile } from "../lib/FunctionalFileGetter";

/**
 * Retrieves signed link for files stored in S3
 * @param path
 * @param type
 * @param siteId
 * @returns a temporary signed link which can be used as source for the file
 */
export function useSignedLink(
  path: string | null,
  type: string,
  siteId: string
) {
  const [link, setLink] = useState<string | null>(null);

  useEffect(() => {
    const getSignedLink = async () => {
      // TODO: Implement getFile
      // const signedUrl = await getFile(path, type, siteId, "public/sitecontent");
      // setLink(signedUrl);
      setLink(null);
    };
    if (!!path) {
      getSignedLink();
    }
  }, [path, type, siteId]);

  return link;
}
