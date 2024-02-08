
import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import axios from 'axios';


export default function Formulaire() {
const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  


  const [ prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [choix, setChoix] = useState('');
  const [pourquoi, setPourquoi] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const data = { nom,prenom, email, tel, choix, pourquoi };
    axios.post('https://api-survey-4.fewnu.app/api/form', data)
      .then(response => {
        console.log(response.data);
        window.location.href = '/Dashboard';
      })
      .catch(error => {
        console.error(error.response.data);
      });
  }
  


  return (
   

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container1 justify-center px-5">
        <div className="space-y-12 ">
          <div className="border-b border-gray-900/10 pb-12 mt-2">
            <h1 className="text-base text-center fw-bold fs-5 leading-9 text-gray-900">
              Sondage sur l'élection presidentielle de 2024
            </h1>
            <p className="mt-1 text-sm leading-6 text-white">
              Veuillez repondre à ces questions !
            </p>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="prenom"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Prenom
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="prenom"
                    id="prenom"
                    value={prenom} onChange={e => setPrenom(e.target.value)} required
                    
                    className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="nom"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Nom
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="nom"
                    id="nom"
                    value={nom} onChange={e => setNom(e.target.value)} required
                   
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
                    value={email} onChange={e => setEmail(e.target.value)} required
                   
                    className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="tel"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Telephone
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="tel"
                    id="tel"
                    value={tel} onChange={e => setTel(e.target.value)} required
                    
                    className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="choix"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Veuiller choisir votre candidat !!
                </label>
                <div className="mt-2">
                  <select
                    id="choix"
                    name="choix"
                    value={choix} onChange={e => setChoix(e.target.value)} required
                    
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
                  htmlFor="pourquoi"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Pourquoi vous avez choisi ce Candidat ?
                </label>
                <div className="mt-2">
                  <textarea
                    type="text"
                    name="pourquoi"
                    id="pourquoi"
                    value={pourquoi} onChange={e => setPourquoi(e.target.value)} required
                    
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
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
              onClick={handleSubmitForm}>
              Envoyer
            </button>
          </div>
        </div>
      </div>
    
    </form>
  );
}

