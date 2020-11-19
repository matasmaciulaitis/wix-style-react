import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { selectorUniDriverFactory } from '../Selector/Selector.uni.driver';
import { editableRowUniDriverFactory } from './EditableRow/EditableRow.uni.driver';

export const editableSelectorUniDriverFactory = (base, body) => {
  const newRowButton = () => base.$('[data-hook="new-row-button-text"]');
  const selectorRowDriver = async index =>
    selectorUniDriverFactory(
      await base.$$('[data-hook="editable-selector-item"]').get(index),
      body,
    );
  const editButtonAt = index => base.$$('[data-hook="edit-item"]').get(index);
  const deleteButtonAt = index =>
    base.$$('[data-hook="delete-item"]').get(index);
  const editableRowDriver = () =>
    editableRowUniDriverFactory(base.$('[data-hook="edit-row-wrapper"]'), body);
  const isEditRowActive = async () =>
    !!(await base.$$('[data-hook="edit-row-wrapper"]').count());

  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets a list of selector drivers
     * @returns {Promise<SelectorUniDriver[]>}
     */
    items: () => {
      return base
        .$$('[data-hook="editable-selector-item"]')
        .map(selector => selectorUniDriverFactory(selector, body));
    },
    /**
     * Checks whether editing mode is active
     * @returns {Promise<boolean>}
     */
    isEditing: () => isEditRowActive(),
    /**
     * Checks wheter any row is being edited
     * @returns {Promise<boolean>}
     */
    isEditingRow: async () =>
      !!((await isEditRowActive()) && (await editableRowDriver().getText())),
    /**
     * Checks wheter any row is being added
     * @returns {Promise<boolean>}
     */
    isAddingRow: async () =>
      !!((await isEditRowActive()) && !(await editableRowDriver().getText())),
    /**
     * Gets the new row button wrapper
     * @returns {Promise<HTMLElement>}
     */
    newRowButton,
    /**
     * Gets the delete row button wrapper at index
     * @param {number} index Item index
     * @returns {Promise<HTMLElement>}
     */
    deleteButtonAt,
    /**
     * Gets the edit row button wrapper at index
     * @param {number} index Item index
     * @returns {Promise<HTMLElement>}
     */
    editButtonAt,
    /**
     * Adds new row and sets input value
     * @param {string} label Text to input
     * @returns {Promise<void>}
     */
    addNewRow: async label => {
      await newRowButton().click();
      return editableRowDriver().setText(label);
    },
    /**
     * Edits row and sets input value
     * @param {number} index Item index
     * @param {string} label Text to input
     * @returns {Promise<void>}
     */
    editRow: async (index, label) => {
      const editButton = await editButtonAt(index);
      await editButton.hover();
      await editButton.click();
      return editableRowDriver().setText(label);
    },
    /**
     * Clicks delete button at index
     * @param {number} index Item index
     * @returns {Promise<void>}
     */
    deleteRow: async index => {
      const deleteButton = await deleteButtonAt(index);
      await deleteButton.hover();
      return deleteButton.click();
    },
    /**
     * Clicks add new row button
     * @returns {Promise<void>}
     */
    startAdding: () => newRowButton().click(),
    /**
     * Clicks edit row button at index
     * @param {number} index Item index
     * @returns {Promise<void>}
     */
    startEditing: async index => (await editButtonAt(index)).click(),
    /**
     * Clicks appove button
     * @returns {Promise<void>}
     */
    clickApprove: () => editableRowDriver().clickApprove(),
    /**
     * Clicks cancel button
     * @returns {Promise<void>}
     */
    clickCancel: () => editableRowDriver().clickCancel(),
    /**
     * Gets the title
     * @returns {Promise<string>}
     */
    title: () => base.$('[data-hook="editable-selector-title"] > span').text(),
    /**
     * Toggles selector of the item at index
     * @param {number} index Item index
     * @returns {Promise<void>}
     */
    toggleItem: async index => (await selectorRowDriver(index)).toggle(),
  };
};
