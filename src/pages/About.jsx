import React from 'react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Création de Sondages : ',
    description:
      'Les utilisateurs peuvent facilement créer des sondages personnalisés en spécifiant les questions, les options de réponse et les paramètres de confidentialité.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Partage Facile :',
    description:
      ' Une fois le sondage créé, les utilisateurs peuvent partager le lien du sondage via des réseaux sociaux, par e-mail ou en le copiant simplement, permettant ainsi à un large public de participer.',
    icon: LockClosedIcon,
  },
  {
    name: 'Personnalisation Avancée :',
    description:
      ' Les utilisateurs ont la possibilité de personnaliser lapparence de leur sondage en choisissant parmi une gamme de thèmes prédéfinis ou en téléchargeant leurs propres images de fond',
    icon: ArrowPathIcon,
  },
  {
    name: 'Sécurité et Confidentialité : ',
    description:
      ' RxDForm garantit la sécurité et la confidentialité des données en offrant des options de paramètres de confidentialité avancées, y compris la possibilité de rendre les sondages publics, privés ou accessibles uniquement sur invitation',
    icon: FingerPrintIcon,
    
    
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-900">Apro-pos</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Tout ce dont vous avez besoin pour créer votre sondage.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          RxDForm est une application intuitive et conviviale qui permet à ses utilisateurs de créer, partager et participer à des sondages en ligne en toute simplicité. Que ce soit pour recueillir des opinions, planifier des événements ou prendre des décisions en groupe, SondageFacile offre une plateforme flexible et efficace pour organiser et analyser les réponses de manière rapide et efficace.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
