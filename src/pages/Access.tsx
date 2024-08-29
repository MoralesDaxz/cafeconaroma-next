"use client";
import FormLogin from "@/components/FormLogin";
import React from "react";

const Access = () => {
  /*  const [users, setUsers] = useState([]); */
  /*   useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
    console.log(users);
    return () => {};
  }, []); */
  return (
    <section className="pt-20 md:pt-28 text-[#0c1225] bg-white min-h-screen w-full flex flex-col justify-center items-center gap-3">
      <h2 className="title text-black">Accede</h2>
      <FormLogin />
    </section>
  );
};

export default Access;
