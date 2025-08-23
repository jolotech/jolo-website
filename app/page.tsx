"use client";
// ------------- import external dependencies ---------------
import { useState } from "react";

// ------------- import internal dependencies -------------
// import SearchInput from "@/components/SearchComponent";
// import UserDetail from "@/components/UserDetails";
import useSearch from "@/hooks/useSearch";
import Link from "next/link";
import styles from "./page.module.css";
import MainLayout from "@/components/Layout/MainLayout";
import LandingLayout from "@/components/Landinglayout/landingLayout";

type User = {
  login: string;
  id: number;
  avatar_url: string;
  type: string;
};

export default function Home() {
  let searchStatus;
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");

  const { queryUser } = useSearch();
  const { data, isFetching, isError, isSuccess } = queryUser(query && type === "org" ? `${query}+type:org` : query);

  /**
   * TODO:Skeleton state will be the proper solution on large applicartion
   * Return Loading state of User
   */
  if (isFetching) {
    searchStatus = <span className={styles.search_loading}>Loading Data...</span>;
  }

  /**
   * Return error status
   */
  if (isError) {
    searchStatus = <span className={styles.search_loading}>An Error occured. Please try again :)</span>;
  }

  /**
   * Return search data with empty items
   */
  if (isSuccess && data?.items.length === 0) {
    searchStatus = <span className={styles.search_loading}>No result was found for this search (:</span>;
  }

  /**
   * Return search data with values
   */
  if (isSuccess && data?.items.length > 0) {
    searchStatus = (
      <>
        {/* <h2 className="text-center text-3xl">Search Result </h2>
        {data.items.map((user: User) => (
          <UserDetail name={user.login} type={user.type} img={user.avatar_url} key={user.id} />
        ))} */}
      </>
    );
  }

  return (
    <LandingLayout>
      {/* className={styles.wrapper} */}
      <section className={styles.header}>
        <h1 className="mt-8 text-jolo-orange-100">Welcome to Jolo</h1>
      </section>
    </LandingLayout>
  );
}
