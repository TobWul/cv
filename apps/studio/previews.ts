import {baseLanguage} from './languages'

type DatePreviewProps = {
  title: string
  startDate: string
  endDate?: string
  locale: boolean
}

export const datePreview = ({title, startDate, endDate, locale}: DatePreviewProps) => ({
  select: {
    title,
    startDate,
    ...(endDate && {endDate}),
  },
  prepare: (selection: DatePreviewProps) => {
    const start = new Date(selection.startDate).toLocaleDateString('no-nb', {
      month: 'short',
    })
    const end =
      (selection.endDate &&
        new Date(selection.endDate).toLocaleDateString('no-nb', {
          month: 'short',
          year: 'numeric',
        })) ||
      'Asvluttende'
    let title = selection.title

    if (locale) title = `${title[baseLanguage.id]}`

    return {
      title,
      subtitle: `${start} ${end && `- ${end}`}`,
    }
  },
})
