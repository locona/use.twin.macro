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
      <a href="#">Profile</a>
    </div>
  </section>
  // NOTE: Success Case
  // <section
  //   css={[tw`block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-100`]}
  // >
  //   <div tw="bg-green-700">
  //     <a href="#">Profile</a>
  //   </div>
  // </section>
)
