import React from 'react'
import { Card } from 'flowbite-react';
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
                                    <label className='codVend mr-2'><strong>Cod. Vendedor: </strong></label>
                                    <input className='w-14 h-8 rounded-lg' type='number' />
                                </div>
                                <div className='flex mr-24'>
                                    <label className='mr-2'><strong>Vendedor: </strong></label>
                                    <input className='w-56 h-8 bg-gray-200 rounded-lg' type="text" disabled/>
                                </div>
                                <div className='flex'>
                                    <label className='mr-2'><strong>ID Venta: </strong></label>
                                    <input className='w-14 h-8 bg-gray-200 rounded-lg' type="text" disabled/>
                                </div>
                            </div>
                        </div>

                        <div className='TablaProVen'>
                            <Table responsive hoverable className='tablapro'>
                            <Table.Head>
                                <Table.HeadCell className='bg-gray-200'>
                                COD
                                </Table.HeadCell>
                                <Table.HeadCell className='bg-gray-200'>
                                Nom. Producto
                                </Table.HeadCell>
                                <Table.HeadCell className='bg-gray-200'>
                                Marca
                                </Table.HeadCell>
                                <Table.HeadCell className='bg-gray-200'>
                                Precio Uni
                                </Table.HeadCell>
                                <Table.HeadCell className='bg-gray-200'>
                                Cant
                                </Table.HeadCell>
                                <Table.HeadCell className='bg-gray-200'>
                                Total
                                </Table.HeadCell>
                                <Table.HeadCell className='bg-gray-200'>
                                <span className="sr-only">
                                    Editar
                                </span>
                                </Table.HeadCell>
                                <Table.HeadCell className='bg-gray-200'>
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

                        <div className='TotalesVen grid-rows-2'>

                            <div className='flex rounded gap-0'
                                id='Totales'
                            >
                                
                                <div className='flex' id='apliDesc'>
                                    <label><strong>Aplicar Descuento: </strong>
                                    <a href="#"></a>
                                    </label>
                                </div>

                                <div className='flex' id='divCard'>
                                    <Card
                                        className="max-w-sm"
                                        id='cardTotales'
                                        >
                                        <div className='flex'>
                                            <div className='flex' id='txtTotales'>
                                                <label><strong>DESCUENTOS</strong></label>
                                                <label><strong>Exento</strong></label>
                                                <label><strong>Neto</strong></label>
                                                <label><strong>IVA 19%</strong></label>
                                                <br />
                                                <label><strong>TOTAL</strong></label>
                                            </div>
                                            <div className='flex' id='txtMontos'>
                                                <div className='flex'>
                                                    <label className='ml-8'><strong>$</strong></label>
                                                    <label className='ml-8'><strong>0</strong></label>
                                                </div>
                                                <div className='flex'>
                                                    <label  className='ml-8'><strong>$</strong></label>
                                                    <label className='ml-8'><strong>0</strong></label>
                                                </div>
                                                <div className='flex'>
                                                    <label className='ml-8'><strong>$</strong></label>
                                                    <label className='ml-8'><strong>0</strong></label>
                                                </div>
                                                <div className='flex'>
                                                    <label className='ml-8'><strong>$</strong></label>
                                                    <label className='ml-8'><strong>0</strong></label>
                                                </div>
                                                <br />
                                                <div className='flex'>
                                                    <label className='ml-8'><strong>$</strong></label>
                                                    <label className='ml-8'><strong>0</strong></label>
                                                </div>
                                            </div>
                                        </div>

                                    </Card>
                                </div>

                            </div>

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

