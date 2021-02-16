import React from 'react'
import tw from 'twin.macro'

export interface CardProps {
  children: React.ReactNode

  title?: React.ReactNode | string
}

export const Card: React.FC<CardProps> = ({ children, title }) => (
  // NOTE: Failed Case css=[object,object]
  <section
    css={[tw`block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-100`]}
  >
    <div>
      <a href="#">プロフィール</a>
    </div>
  </section>
  // NOTE: Success Case
  // <section tw="bg-white overflow-y-visible shadow rounded-lg flex flex-col gap-5">
  //   {title && (
  //     <div tw="bg-white px-3 py-5 border-b border-gray-200 sm:px-6">
  //       <h3 tw="text-lg leading-6 font-medium text-gray-900">{title}</h3>
  //     </div>
  //   )}
  //   <div>{children}</div>
  // </section>
)
