import React from 'react'
import 'twin.macro'

export interface CardProps {
  children: React.ReactNode

  title?: React.ReactNode | string
}

export const Card: React.FC<CardProps> = ({ children, title }) => (
  <section tw="bg-white overflow-y-visible shadow rounded-lg flex flex-col gap-5">
    {title && (
      <div tw="bg-white px-3 py-5 border-b border-gray-200 sm:px-6">
        <h3 tw="text-lg leading-6 font-medium text-gray-900">{title}</h3>
      </div>
    )}
    <div>{children}</div>
  </section>
)
