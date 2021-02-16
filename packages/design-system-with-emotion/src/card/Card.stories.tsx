import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Card, CardProps } from './Card'

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} title="タイトル" />

export const Default = Template.bind({})
Default.args = {}
