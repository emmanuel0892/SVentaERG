import React from 'react'

import { Table } from 'flowbite-react';

export default function VentaNueva() {
  return (
    <>
    
        <div className='sm:ml-64' id='PrincipalVentas'>
            <div className='p-4 border-2 border-black border-dashed rounded-lg'>
                <div className='grid grid-flow-col mb-1'>
                    <div className='flex items-center justify-center rounded'
                        id='tablaVenta1'
                    >
                        <br />
                        <div className='grid'>
                            <div className='flex col'>
                                <div className='flex mr-24'>
                                    <label className='mr-2' htmlFor=""><strong>Cod. Vendedor: </strong></label>
                                    <input className='w-14 h-8' type="text" />
                                </div>
                                <div className='flex mr-24'>
                                    <label className='mr-2' htmlFor=""><strong>Vendedor: </strong></label>
                                    <input className='w-56 h-8' type="text" />
                                </div>
                                <div className='flex'>
                                    <label className='mr-2' htmlFor=""><strong>ID Venta: </strong></label>
                                    <input className='w-14 h-8' type="text" />
                                </div>
                            </div>
                        </div>

                        <div className='TablaProVen'>
                            <Table responsive hoverable className='tablapro'>
                            <Table.Head>
                                <Table.HeadCell>
                                Código
                                </Table.HeadCell>
                                <Table.HeadCell>
                                Nom. Producto
                                </Table.HeadCell>
                                <Table.HeadCell>
                                Marca
                                </Table.HeadCell>
                                <Table.HeadCell>
                                Precio Uni
                                </Table.HeadCell>
                                <Table.HeadCell>
                                Cant
                                </Table.HeadCell>
                                <Table.HeadCell>
                                Total
                                </Table.HeadCell>
                                <Table.HeadCell>
                                <span className="sr-only">
                                    Editar
                                </span>
                                </Table.HeadCell>
                                <Table.HeadCell>
                                <span className="sr-only">
                                    Eliminar
                                </span>
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>
                                    185123456
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Apple MacBook Pro 17"
                                </Table.Cell>
                                <Table.Cell>
                                    Apple
                                </Table.Cell>
                                <Table.Cell>
                                    $1050000
                                </Table.Cell>
                                <Table.Cell>
                                    1
                                </Table.Cell>
                                <Table.Cell>
                                    $1050000
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                    >
                                    <p>
                                        Editar
                                    </p>
                                    </a>
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                    className="font-medium text-red-700 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                    >
                                    <p>
                                        Eliminar
                                    </p>
                                    </a>
                                </Table.Cell>
                                </Table.Row>

                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>
                                    185123456
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Apple MacBook Pro 17"
                                </Table.Cell>
                                <Table.Cell>
                                    Apple
                                </Table.Cell>
                                <Table.Cell>
                                    $1050000
                                </Table.Cell>
                                <Table.Cell>
                                    1
                                </Table.Cell>
                                <Table.Cell>
                                    $1050000
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                    >
                                    <p>
                                        Editar
                                    </p>
                                    </a>
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                    className="font-medium text-red-700 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                    >
                                    <p>
                                        Eliminar
                                    </p>
                                    </a>
                                </Table.Cell>
                                </Table.Row>

                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>
                                    185123456
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Apple MacBook Pro 17"
                                </Table.Cell>
                                <Table.Cell>
                                    Apple
                                </Table.Cell>
                                <Table.Cell>
                                    $1050000
                                </Table.Cell>
                                <Table.Cell>
                                    1
                                </Table.Cell>
                                <Table.Cell>
                                    $1050000
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                    >
                                    <p>
                                        Editar
                                    </p>
                                    </a>
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                    className="font-medium text-red-700 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                    >
                                    <p>
                                        Eliminar
                                    </p>
                                    </a>
                                </Table.Cell>
                                </Table.Row>

                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>
                                    185123456
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Apple MacBook Pro 17"
                                </Table.Cell>
                                <Table.Cell>
                                    Apple
                                </Table.Cell>
                                <Table.Cell>
                                    $1050000
                                </Table.Cell>
                                <Table.Cell>
                                    1
                                </Table.Cell>
                                <Table.Cell>
                                    $1050000
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                    >
                                    <p>
                                        Editar
                                    </p>
                                    </a>
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                    className="font-medium text-red-700 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                    >
                                    <p>
                                        Eliminar
                                    </p>
                                    </a>
                                </Table.Cell>
                                </Table.Row>

                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>
                                    185123456
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Apple MacBook Pro 17"
                                </Table.Cell>
                                <Table.Cell>
                                    Apple
                                </Table.Cell>
                                <Table.Cell>
                                    $1050000
                                </Table.Cell>
                                <Table.Cell>
                                    1
                                </Table.Cell>
                                <Table.Cell>
                                    $1050000
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                    >
                                    <p>
                                        Editar
                                    </p>
                                    </a>
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                    className="font-medium text-red-700 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                    >
                                    <p>
                                        Eliminar
                                    </p>
                                    </a>
                                </Table.Cell>
                                </Table.Row>
                                
                            </Table.Body>
                            </Table>
                        </div>

                        <div className='TotalesVen'>
                            <p>totales</p>
                        </div>
                        
                        
                    </div>
                    <div className='flex items-center justify-center rounded bg-pink-300'
                        id='tablaVenta2'
                    >
                        <p>sección ventas</p>
                    </div>
                    
                </div>
            </div>
        </div>

    </>
  )
}

