import { Box, Text, TextArea, TextAreaProps } from '@design-system-soi/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,

  tags: ['autodocs'],

  args: {},

  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size="sm">Observations</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any obersavations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
