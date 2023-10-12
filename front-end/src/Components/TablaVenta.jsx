import React from 'react'

export default function TablaVenta() {
  return (
    <>
        <div className='row'>
            <div className='container relative overflow-x-auto'>
                <table className='w-full '>
                    <thead className='bg-gray-50 border-b-2 uppercase border-gray-200'>
                        <tr>
                            <th scope='col' className='p-3 text-sm font-semibold tracking-wide text-center'>Cod</th>
                            <th scope='col' className='p-3 text-sm font-semibold tracking-wide text-center'>Nom. Producto</th>
                            <th scope='col' className='p-3 text-sm font-semibold tracking-wide text-center'>Marca</th>
                            <th scope='col' className='p-3 text-sm font-semibold tracking-wide text-center'>Precio Uni</th>
                            <th scope='col' className='p-3 text-sm font-semibold tracking-wide text-center'>Cantidad</th>
                            <th scope='col' className='p-3 text-sm font-semibold tracking-wide text-center'>Total</th>
                            <th scope='col' className='p-3 text-sm font-semibold tracking-wide text-center'>Editar</th>
                            <th scope='col' className='p-3 text-sm font-semibold tracking-wide text-center'>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=' text-center'>18900123</td>
                            <td className=' text-center'>Lana Bebe</td>
                            <td className=' text-center'>Ukril</td>
                            <td className=' text-center'>$890</td>
                            <td className=' text-center'>1</td>
                            <td className=' text-center'>$890</td>
                            <td className=' text-center justify-self-center'>
                                <a href="" className=' flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </a>
                            </td>
                            <td className=' text-center'>
                                <a href="" className=' flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}
