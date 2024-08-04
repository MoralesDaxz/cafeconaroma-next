"use client";
import React, { useEffect, useState } from "react";
import PayModalFixed from "./PayModalFixed";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { SpainCommunities } from "@/utils/information";
import { usePayProducts } from "@/context/PayCoffee";
import { ChoosePayFormData, TotalInitValue } from "@/interfaces/interfaces";
import { newOrder } from "@/api/apiGetCoffee";
import { displayCurrentTime, generateInvoiceCode } from "@/utils/invoice";
import ErrorModalForm from "./ErrorModalForm";
import { getKeyLocal, resetBuyLocal } from "@/utils/localStorageItems";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
import ModalRedirect from "./ModalRedirect";

const ChoosePay = () => {
  const { controlRender, setControlRender } = usePayProducts();
  const borderStyle = `border-b-[3px] border-r-[1px] border-l-[3px] border-t-[1px] border-green-600 rounded-md opacity-100`;
  const [comunitySpain, setComunitySpain] = useState("");
  const [province, setProvince] = useState("");
  const [inputKind, setInputKind] = useState("");
  const [loadingOrderApi, setLoadingOrderApi] = useState(false);
  const [loadingRedirect, setLoadingRedirect] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      payTipe: "",
      name: "",
      lastName: "",
      identity: "",
      mail: "",
      phone: "",
      comunity: "",
      province: "",
      street: "",
      code: "",
      plant: "",
      door: "",
      anyMore: "",
    },
  });

  const clearForm = () => {
    setComunitySpain("");
    setProvince("");
    setInputKind("");
    return reset();
  };
  const redirectClient = () => {
    clearForm();
    return setLoadingRedirect(true);
  };
  useEffect(() => {
    const itemsLocalStorage: TotalInitValue = getKeyLocal("buy");
    itemsLocalStorage.product.length <= 0 && redirectClient();
    return;
  },[]);

  const onForm = async (data: ChoosePayFormData) => {
    const itemsLocalStorage: TotalInitValue = getKeyLocal("buy");
    if (itemsLocalStorage.product.length >= 1) {
      setLoadingOrderApi(true);
      const items = {
        time: await displayCurrentTime(),
        date: await generateInvoiceCode(),
        office: "E001",
        sent: { ...itemsLocalStorage.sent, ...data },
      };
      const updateData = {
        ...itemsLocalStorage,
        ...items,
      };
    
      const order = await newOrder(updateData);
      if (order) {
        /* Tratamos datos necesarios */
        const newInvoice = {
          invoice: order.invoice,
          product: order.product,
          total: order.total,
          comunity: order.sent.comunity,
          province: order.sent.province,
          code: order.sent.code,
          name: order.sent.name,
          extra: order.sent.anyMore,
          delivery: order.sent.delivery,
        };

        localStorage.setItem(
          "invoice",
          JSON.stringify(newInvoice)
        ); /* Datos para utilizar en Successfull extrayendo desde LS - invoice */
        resetBuyLocal(); /* Limpiamos LS - buy */
        setControlRender(
          controlRender + 1
        ); /* Controlamos Estado global actualizamos segun LS - buy Limpio */
        clearForm(); /* Limpiamos Form */
        setLoadingOrderApi(false);
        return router.push("/success");
      }
    }
    return redirectClient();
  };
  return (
    <article className="flex flex-col sm:flex-row gap-3 px-4 w-full w-max-[800px]">
      <section className="flex flex-col bg-[#2e2d2dd2] w-full sm:w-[60%] pt-4 rounded-md gap-4 px-1">
        <h2 className="pl-2 font-medium text-lg">Seleccionar método de pago</h2>
        <form onSubmit={handleSubmit(onForm)} className="flex flex-col gap-3">
          <div
            className={`flex items-center pl-2 py-2 gap-3 ${
              inputKind === "tarjeta" ? borderStyle : "opacity-70"
            }`}
          >
            <input
              className="h-4 w-4 accent-[#2A5B45] cursor-pointer "
              type="radio"
              onClick={() => setInputKind("tarjeta")}
              checked={inputKind === "tarjeta"}
              {...register("payTipe", {
                required: "Seleccione un metodo de pago",
              })}
              value={"card"}
            />
            <span className=" text-[1em]">
              <p className="font-medium">Tarjeta de débito</p>
              {inputKind === "tarjeta" && (
                <p className="text-[.8em] font-light opacity-80 w-full">
                  Opción estándar sin seguimiento
                </p>
              )}
            </span>
          </div>
          <span className="bg-[#817464] h-[1px] w-[90%] self-center"></span>
          <div
            className={`flex items-center pl-2 py-2 gap-3 ${
              inputKind === "transferencia" ? borderStyle : "opacity-70"
            }`}
          >
            <input
              className=" h-4 w-4 accent-[#2A5B45] cursor-pointer"
              type="radio"
              onClick={() => setInputKind("transferencia")}
              checked={inputKind === "transferencia"}
              {...register("payTipe", {
                required: "Seleccione un metodo de pago",
              })}
              value={"transfer"}
            />
            <span className=" text-[1em] font-medium">
              <p>Transferencia bancaria</p>
              {inputKind === "transferencia" && (
                <span>
                  <ol className=" list-disc font-light ml-3 text-[.9em]">
                    <li>Banco ING</li>
                    <li>Titular Export Coffee</li>
                    <li>Cuenta ES12 1234 1234 123457890</li>
                  </ol>
                  <p className="text-[.8em] font-light opacity-80 w-full">
                    Será necesario recibir el comprobante de la transferencia
                    para preparar tu pedido
                  </p>
                </span>
              )}
            </span>
          </div>
          <span className="bg-[#817464] h-[1px] w-[90%] self-center"></span>
          <div
            className={`flex items-center pl-2 py-2 gap-3 ${
              inputKind === "bizum" ? borderStyle : "opacity-70"
            }`}
          >
            <input
              className=" h-4 w-4 accent-[#2A5B45] cursor-pointer"
              type="radio"
              onClick={() => setInputKind("bizum")}
              checked={inputKind === "bizum"}
              {...register("payTipe", {
                required: "Seleccione un metodo de pago",
              })}
              value={"bizum"}
            />
            <span className=" text-[1em]">
              <p className="font-medium">Bizum</p>
              {inputKind === "bizum" && (
                <p className="text-[.8em] font-light opacity-80 w-full">
                  Será necesario confirmar la transaccion para preparar tu
                  pedido
                </p>
              )}
            </span>
          </div>

          {inputKind !== "" && (
            <div className=" bg-[white] text-[black] w-full p-4 flex flex-col justify-center mb-2 rounded-md">
              <h2 className="pl-2 font-medium text-lg mt-2 mb-4">
                Facturación
              </h2>
              <label className="float-label-container">
                <input
                  required
                  className="input"
                  type="text"
                  minLength={2}
                  maxLength={50}
                  placeholder=""
                  {...register("name", {
                    pattern: {
                      value:
                        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1]+)*$/,
                      message: "Indicar solo caracteres. Ejemplo: Pedro",
                    },
                  })}
                />
                <span className="select-none bg-[white] rounded-3x">
                  Nombre
                </span>
                {errors.name && <ErrorModalForm text={errors.name.message} />}
              </label>
              <label className="float-label-container">
                <input
                  required
                  className="input"
                  type="text"
                  minLength={2}
                  maxLength={50}
                  placeholder=""
                  {...register("lastName", {
                    pattern: {
                      value:
                        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1]+)*$/,
                      message: "Indicar solo caracteres. Ejemplo: Perez",
                    },
                  })}
                />
                <span className="select-none bg-[white] rounded-3x">
                  Apellidos
                </span>
                {errors.lastName && (
                  <ErrorModalForm text={errors.lastName.message} />
                )}
              </label>
              <label className="float-label-container">
                <input
                  required
                  className="input"
                  type="text"
                  placeholder=""
                  minLength={9}
                  maxLength={9}
                  {...register("identity", {
                    pattern: {
                      value: /^[A-Za-z]\d{7}[A-Za-z]$/,
                      message: "Formato invalido. Ejemplo: Y1234567P",
                    },
                  })}
                />
                <span className="select-none bg-[white] rounded-3xl">
                  Identificacion
                </span>
                {errors.identity && (
                  <ErrorModalForm text={errors.identity.message} />
                )}
              </label>
              <h2 className="pl-2 font-medium text-lg mt-2 mb-4">
                Dirección de envío
              </h2>
              <label className="float-label-container">
                <input
                  required
                  className="input"
                  type="email"
                  placeholder=""
                  {...register("mail", {
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Formato invalido. Ejemplo: example@exam.com",
                    },
                  })}
                />
                <span className="select-none bg-[white] rounded-3xl">
                  Email
                </span>
                {errors.mail && <ErrorModalForm text={errors.mail.message} />}
              </label>
              <label className="float-label-container">
                <input
                  required
                  className="input"
                  type="tel"
                  placeholder=""
                  {...register("phone", {
                    pattern: {
                      value:
                        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,4}$/,
                      message: "Formato invalido. Ejemplo: 612345678",
                    },
                    minLength: {
                      value: 9,
                      message: "Formato invalido. Ejemplo: 612345678",
                    },
                    maxLength: {
                      value: 15,
                      message: "Formato invalido. Ejemplo: 612345678",
                    },
                  })}
                  /* */
                />
                <span className="select-none bg-[white] rounded-3xl">
                  Telefono
                </span>
                {errors.phone && <ErrorModalForm text={errors.phone.message} />}
              </label>
              <label className="float-label-container">
                <select
                  className="input"
                  required
                  {...register("comunity", {
                    onChange: (e) => setComunitySpain(e.currentTarget.value),
                    onBlur: (e) => setComunitySpain(e.currentTarget.value),
                  })}
                >
                  <option value={""} disabled>
                    Seleccione
                  </option>
                  {SpainCommunities.map((comunity, index) => {
                    return (
                      <option key={index} value={comunity.comunidad}>
                        {comunity.comunidad}
                      </option>
                    );
                  })}
                </select>
                <span className="select-none bg-[white] rounded-3xl">
                  Comunidad
                </span>
                {errors.comunity && <ErrorModalForm />}
              </label>
              {comunitySpain !== "" && (
                <label className="float-label-container">
                  <select
                    className="input"
                    required
                    {...register("province", {
                      onChange: (e) => setProvince(e.currentTarget.value),
                      onBlur(event) {
                        setProvince(event.currentTarget.value);
                      },
                    })}
                  >
                    <option value={""} disabled>
                      Seleccione
                    </option>
                    {SpainCommunities.map((comunity) => {
                      if (comunity.comunidad === comunitySpain) {
                        return comunity.provincias.map((prov, i) => {
                          return (
                            <option key={i} value={prov}>
                              {prov}
                            </option>
                          );
                        });
                      }
                    })}
                  </select>
                  <span className="select-none bg-[white] rounded-3xl">
                    Província
                  </span>
                  {errors.province && <ErrorModalForm />}
                </label>
              )}

              {province !== "" && (
                <>
                  <label className="float-label-container">
                    <input
                      required
                      className="input"
                      type="text"
                      placeholder=""
                      minLength={5}
                      maxLength={50}
                      {...register("street")}
                    />
                    <span className="select-none bg-[white] rounded-3xl">
                      Calle
                    </span>
                    {errors.street && <ErrorModalForm />}
                  </label>
                  <div className="w-full flex gap-1">
                    <label className="float-label-container">
                      <input
                        required
                        className="input"
                        type="text"
                        placeholder=""
                        maxLength={7}
                        {...register("code", {
                          pattern: {
                            value: /^\d{4,7}([-\s]?\d{3})?|[A-Za-z0-9]{6,8}$/,
                            message: "Ejemplo: 28013, A1B 2C3",
                          },
                        })}
                      />
                      <span className="select-none bg-[white] rounded-3xl">
                        Cód. postal
                      </span>
                      {errors.code && (
                        <ErrorModalForm text={errors.code.message} />
                      )}
                    </label>
                    <label className="float-label-container">
                      <input
                        required
                        className="input"
                        type="text"
                        placeholder=""
                        maxLength={3}
                        {...register("plant")}
                      />
                      <span className="select-none bg-[white] rounded-3xl">
                        Planta
                      </span>
                    </label>
                    <label className="float-label-container">
                      <input
                        required
                        className="input"
                        type="text"
                        placeholder=""
                        maxLength={4}
                        {...register("door")}
                      />
                      <span className="select-none bg-[white] rounded-3xl">
                        Puerta
                      </span>
                    </label>
                  </div>
                  <label className="float-label-container">
                    <textarea
                      className="input"
                      placeholder=" Dinos si tienes alguna indicación extra."
                      maxLength={150}
                      {...register("anyMore")}
                    />
                    <span className="select-none bg-[white] rounded-3xl">
                      ¿ Alguna indicación extra ?
                    </span>
                  </label>

                  {loadingOrderApi && <Loader text={"Cargando pedido..."} />}
                  <input
                    disabled={loadingOrderApi}
                    type="submit"
                    value="Realizar pedido"
                    className={
                      loadingOrderApi
                        ? "opacity-0"
                        : "opacity-100 cursor-pointer my-4 self-center p-3 w-[40%] bg-green-600 text-white hover:text-black hover:bg-[#49df80] hover:scale-105 rounded-md transition-all duration-300"
                    }
                  />
                </>
              )}
            </div>
          )}
        </form>
      </section>
      <section className="w-full  sm:w-[40%] mr-8 rounded-md">
        <PayModalFixed>
          <div className="flex justify-end items-center mt-3 font-medium gap-3 text-white">
            {!loadingOrderApi && (
              <Link
                href={"/store"}
                className="p-2 text-[#13470F] hover:scale-105 rounded-md transition-all duration-300"
              >
                Volver a tienda
              </Link>
            )}
          </div>
        </PayModalFixed>
      </section>
      {loadingRedirect && <ModalRedirect />}
    </article>
  );
};

export default ChoosePay;
