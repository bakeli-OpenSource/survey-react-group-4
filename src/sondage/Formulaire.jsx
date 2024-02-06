import React from "react";
import { useForm } from "react-hook-form";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Formulaire() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
   

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container1 justify-center px-5">
        <div className="space-y-12 ">
          <div className="border-b border-gray-900/10 pb-12 mt-2">
            <h1 className="text-base text-center fw-bold  leading-9 text-white">
              Sondage sur l'élection presidentielle de 2024
            </h1>
            <p className="mt-1 text-sm leading-6 text-white">
              Veuillez repondre à ces questions !
            </p>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-white">
                  Prenom
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading- text-white">
                  Nom
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white">
                  Email 
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-white">
                  Telephone
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="tel"
                    id="tel"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-white">
                  Veuiller choisir votre candidat !!
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>Diomaye FAYE</option>
                    <option>Khalifa Sall</option>
                    <option>Dethié Fall</option>
                    <option>Amadou Ba</option>
                    <option>Idrissa Seck</option>
                    <option>Pape Djibril Fall</option>
                    <option>Aliou Mamadou Dia</option>
                    <option>Boune Dione</option>
                    <option>Aliou Mamadou Dia</option>
                    <option>Cheikh Tidiane Dieye</option>
                    <option>Daouda Ndiaye</option>
                    <option>Anta Babacar Ngom</option>
                    <option>Rose Wardini</option>
                    <option>Habib Sy</option>
                    <option>Serigne Mboup</option>
                    <option>Mamadou Lamine Diallo</option>
                    <option>Malick Gakou</option>
                    <option>Aly Ngouille Ndiaye</option>
                    <option>El Hadji Mamadou Diao</option>
                    <option>Thierno Allasane Sall</option>
                    <option></option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-white">
                  Pourquoi vous avez choisi ce Candidat ?
                </label>
                <div className="mt-2">
                  <textarea
                    type="text"
                    name=""
                    id=""
                    autoComplete=""
                    className="block champ w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

             

              
            </div>
          </div>

       

          <div className="mt-4 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text- shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    
    </form>
  );
}
