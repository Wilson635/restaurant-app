import React from 'react'
import { HiCalendar } from 'react-icons/hi'
import { BiBus, BiDollarCircle, BiSupport } from 'react-icons/bi'
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa'

export const NewsLetter = () => {
  return (
    <>
        <div className="relative isolate overflow-hidden bg-gray-900 py-16 mt-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Rejoignez notre newsletter.</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            Rejoignez notre newsletter recevez des articles et podcasts sur les entreprises et leurs services.
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="mt-20 text-lg leading-8 text-gray-300">
                            Suivez nous sur : 
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 cursor-pointer hover:bg-blue-800 hover:border-none">
                                <FaFacebookF className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 cursor-pointer hover:bg-blue-500 hover:border-none">
                                <FaTwitter className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 cursor-pointer hover:bg-rose-600 hover:border-none">
                                <FaInstagram className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 cursor-pointer hover:bg-slate-900 hover:border-none">
                                <FaGithub className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 cursor-pointer hover:bg-red-800 hover:border-none">
                                <FaYoutube className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <HiCalendar className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white">Respect des delais</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                Recevez vos commandes à la date précisée.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <BiSupport className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white">Support Client</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                Nous sommes là pour répondre à vos besoins.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <BiBus className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white">Livraison</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                Recevez vos colis directement chez vous avec notre service de livraison à domicile.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <BiDollarCircle className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white">Remboursement inclus</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                Nous sommes là pour vous satisfaire au cas contraire vous êtes remboursés.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    </>
  )
}
