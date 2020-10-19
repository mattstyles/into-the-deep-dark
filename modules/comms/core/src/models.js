
import { generateUuid } from './id'

/**
 * @prop {string} id - unique identifier
 * @prop {string} category - messages belong a category enum
 * @prop {string} title - title for the message
 * @prop {string} body - markdown body content for a message
 * @prop {boolean} isRead - read status
 */
const modelTemplate = {
  id: 'id',
  category: 'category',
  title: 'title',
  body: '_body_ **content**',
  isRead: false
}

export const createModel = (data) => {
  return {
    ...modelTemplate,
    ...data,
    id: generateUuid()
  }
}
