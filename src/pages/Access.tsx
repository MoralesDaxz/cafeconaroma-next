"use client";
import FormLogin from "@/components/FormLogin";
import FormSignUp from "@/components/FormSignUp";
import { fetchUsers } from "@/data/controlLocalStorage";
import React, { useEffect, useState } from "react";

const Access = () => {
  const [users, setUsers] = useState([]);


/*   useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
    console.log(users);
    return () => {};
  }, []); */
  return (
    <section className="pt-20 md:pt-28 text-[#0c1225] min-h-screen w-full flex justify-center items-center">
      <article className="w-[90%] bg-slate-900 min-h-[400px] flex-col justify-center">
       <FormLogin/>
      </article>
    </section>
  );
};

export default Access;
