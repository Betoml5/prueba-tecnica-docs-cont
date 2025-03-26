import { IPackage } from "@/types";

export const getPackages = async (): Promise<IPackage[]> => {
  try {
    const data = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
    const json = await data.json();
    return json;
  } catch (error) {
    throw new Error(error as string);
  }
};
