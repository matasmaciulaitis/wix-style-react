/* eslint-disable */
/* tslint:disable */
/*
 * DO NOT EDIT THIS FILE!
 * YOUR CHANGES WILL BE OVERWRITTEN!
 * FILE IS BASED ON .wuf/testkits/enzyme.template.ejs
 * AND GENERATED BY `wuf export-teskits`
 */
import {
  enzymeTestkitFactoryCreator,
  enzymeUniTestkitFactoryCreator,
} from 'wix-ui-test-utils/enzyme';

import tooltipDriverFactory from '../src/Tooltip/Tooltip.driver';
import { tooltipDriverFactory as tooltipNextDriverFactory } from '../src/Tooltip/TooltipNext/Tooltip.uni.driver';

export const tooltipTestkitFactory = enzymeTestkitFactoryCreator(
  tooltipDriverFactory,
);

export const TooltipTestkit = enzymeUniTestkitFactoryCreator(
  tooltipNextDriverFactory,
);

const load = module => {
  const MODULE_META_KEYS = ['__esModule'];

  const moduleFields = Object.keys(module).reduce((total, key) => {
    if (!MODULE_META_KEYS.includes(key)) {
      return total.concat(module[key]);
    }
    return total;
  }, []);

  let defaultOrFirstExport;
  if (module.default) {
    defaultOrFirstExport = module.default;
  } else if (moduleFields.length === 1) {
    defaultOrFirstExport = moduleFields[0];
  } else {
    defaultOrFirstExport = module;
  }
  return defaultOrFirstExport;
};

export const accordionTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/Accordion/Accordion.uni.driver')));
export const addItemTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/AddItem/AddItem.driver')));
export const autoCompleteTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/AutoComplete/AutoComplete.driver')));
export const autoCompleteCompositeTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/AutoCompleteComposite/AutoCompleteComposite.driver')));
export const avatarTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/Avatar/Avatar.uni.driver')));
export const badgeTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Badge/Badge.driver')));
export const badgeSelectTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/BadgeSelect/BadgeSelect.driver')));
export const boxTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/Box/Box.uni.driver')));
export const breadcrumbsTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Breadcrumbs/Breadcrumbs.driver')));
export const buttonTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/Button/Button.uni.driver')));
export const calendarTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Calendar/Calendar.driver')));
export const calendarPanelTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/CalendarPanel/CalendarPanel.driver')));
export const calendarPanelFooterTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver')));
export const cardGalleryItemTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/CardGalleryItem/CardGalleryItem.uni.driver')));
export const carouselTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Carousel/Carousel.driver')));
export const checkboxTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Checkbox/Checkbox.driver')));
export const circularProgressBarTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/CircularProgressBar/CircularProgressBar.driver')));
export const closeButtonTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/CloseButton/CloseButton.uni.driver')));
export const colorInputTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/ColorInput/ColorInput.uni.driver')));
export const colorPickerTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/ColorPicker/ColorPicker.driver')));
export const contactItemBuilderTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/ContactItemBuilder/ContactItemBuilder.driver')));
export const counterBadgeTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/CounterBadge/CounterBadge.driver')));
export const dataTableTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/DataTable/DataTable.driver')));
export const dateInputTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/DateInput/DateInput.uni.driver')));
export const datePickerTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/DatePicker/DatePicker.driver')));
export const dropdownTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Dropdown/Dropdown.driver')));
export const dropdownBaseTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/DropdownBase/DropdownBase.uni.driver')));
export const dropdownLayoutTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/DropdownLayout/DropdownLayout.driver')));
export const editableSelectorTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/EditableSelector/EditableSelector.driver')));
export const editableTitleTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/EditableTitle/EditableTitle.uni.driver')));
export const emptyStateTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/EmptyState/EmptyState.driver')));
export const errorIndicatorTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/ErrorIndicator/ErrorIndicator.uni.driver')));
export const filePickerTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/FilePicker/FilePicker.driver')));
export const floatingHelperTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/FloatingHelper/FloatingHelper.driver')));
export const floatingNotificationTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/FloatingNotification/FloatingNotification.uni.driver')));
export const formFieldTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/FormField/FormField.driver')));
export const genericModalLayoutTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/GenericModalLayout/GenericModalLayout.driver')));
export const googleAddressInputWithLabelTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/GoogleAddressInputWithLabel/GoogleAddressInputWithLabel.driver')));
export const googlePreviewTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/GooglePreview/GooglePreview.uni.driver')));
export const headingTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Heading/Heading.driver')));
export const highlighterTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Highlighter/Highlighter.driver')));
export const iconButtonTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/IconButton/IconButton.uni.driver')));
export const toggleButtonTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/ToggleButton/ToggleButton.uni.driver')));
export const imageViewerTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/ImageViewer/ImageViewer.driver')));
export const inputTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Input/Input.driver')));
export const inputAreaTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/InputArea/InputArea.driver')));
export const inputWithOptionsTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/InputWithOptions/InputWithOptions.driver')));
export const labelTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Label/Label.driver')));
export const linearProgressBarTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/LinearProgressBar/LinearProgressBar.driver')));
export const listItemActionTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/ListItemAction/ListItemAction.uni.driver')));
export const loaderTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Loader/Loader.driver')));
export const modalTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Modal/Modal.driver')));
export const modalSelectorLayoutTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/ModalSelectorLayout/ModalSelectorLayout.driver')));
export const multiSelectTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/MultiSelect/MultiSelect.driver')));
export const multiSelectCheckboxTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/MultiSelectCheckbox/MultiSelectCheckbox.driver')));
export const multiSelectCompositeTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/MultiSelectComposite/MultiSelectComposite.driver')));
export const nestableListTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/NestableList/NestableList.driver')));
export const noBorderInputTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/NoBorderInput/NoBorderInput.driver')));
export const notificationTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Notification/Notification.driver')));
export const numberInputTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/NumberInput/NumberInput.uni.driver')));
export const pageTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Page/Page.driver')));
export const pageHeaderTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/PageHeader/PageHeader.driver')));
export const popoverTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Popover/Popover.driver')));
export const popoverMenuTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/PopoverMenu/PopoverMenu.driver')));
export const proportionTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/Proportion/Proportion.uni.driver')));
export const radioGroupTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/RadioGroup/RadioGroup.driver')));
export const rangeTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Range/Range.driver')));
export const richTextInputAreaTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/RichTextInputArea/RichTextInputArea.uni.driver')));
export const searchTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Search/Search.driver')));
export const sectionHelperTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/SectionHelper/SectionHelper.driver')));
export const segmentedToggleTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/SegmentedToggle/SegmentedToggle.uni.driver')));
export const selectorTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Selector/Selector.driver')));
export const sidebarTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/Sidebar/Sidebar.uni.driver')));
export const sidebarSectionTitleTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/SidebarSectionTitle/SidebarSectionTitle.uni.driver')));
export const skeletonTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Skeleton/Skeleton.driver')));
export const sliderTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Slider/Slider.driver')));
export const socialPreviewTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/SocialPreview/SocialPreview.uni.driver')));
export const sortableListTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/SortableList/SortableList.driver')));
export const statsWidgetTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/StatsWidget/StatsWidget.driver')));
export const stepperTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/Stepper/Stepper.uni.driver')));
export const swatchesTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/Swatches/Swatches.uni.driver')));
export const tableTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Table/Table.driver')));
export const tableActionCellTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/TableActionCell/TableActionCell.driver')));
export const tabsTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Tabs/Tabs.driver')));
export const tagTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Tag/Tag.driver')));
export const textTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Text/Text.driver')));
export const textButtonTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/TextButton/TextButton.uni.driver')));
export const thumbnailTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/Thumbnail/Thumbnail.uni.driver')));
export const timeInputTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/TimeInput/TimeInput.driver')));
export const toggleSwitchTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/ToggleSwitch/ToggleSwitch.driver')));
export const sidebarSectionItemTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/SidebarSectionItem/SidebarSectionItem.uni.driver')));
export const sidebarDividerTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/SidebarDivider/SidebarDivider.uni.driver')));
export const sidebarBackButtonTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/SidebarBackButton/SidebarBackButton.uni.driver')));
export const sidebarHeaderTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/SidebarHeader/SidebarHeader.uni.driver')));
export const modalPreviewLayoutTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/ModalPreviewLayout/ModalPreviewLayout.uni.driver')));
export const statisticsWidgetTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/StatisticsWidget/StatisticsWidget.uni.driver')));
export const composerHeaderTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/ComposerHeader/ComposerHeader.uni.driver')));
export const fillPreviewTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/FillPreview/FillPreview.uni.driver')));
export const fillButtonTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/FillButton/FillButton.uni.driver')));
export const barChartTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/BarChart/BarChart.uni.driver')));
export const inputWithLabelTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/InputWithLabel/InputWithLabel.uni.driver')));
export const autoCompleteWithLabelTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/AutoCompleteWithLabel/AutoCompleteWithLabel.uni.driver')));
export const dividerTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/Divider/Divider.uni.driver')));
export const labelledElementTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/LabelledElement/LabelledElement.uni.driver')));
export const previewWidgetTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/PreviewWidget/PreviewWidget.uni.driver')));
export const modalMobileLayoutTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/ModalMobileLayout/ModalMobileLayout.uni.driver')));
export const mediaOverlayTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/MediaOverlay/MediaOverlay.uni.driver')));
export const infoIconTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/InfoIcon/InfoIcon.uni.driver')));
export const socialButtonTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/SocialButton/SocialButton.uni.driver')));
export const verticalTabsTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/VerticalTabs/VerticalTabs.uni.driver')));
export const verticalTabsItemTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/VerticalTabsItem/VerticalTabsItem.uni.driver')));
export const mobilePreviewWidgetTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/MobilePreviewWidget/MobilePreviewWidget.uni.driver')));
export const listItemSectionTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/ListItemSection/ListItemSection.uni.driver')));
export const browserPreviewWidgetTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/BrowserPreviewWidget/BrowserPreviewWidget.uni.driver')));
export const listItemSelectTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/ListItemSelect/ListItemSelect.uni.driver')));
export const timeTableTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/TimeTable/TimeTable.uni.driver')));
export const marketingLayoutTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/MarketingLayout/MarketingLayout.uni.driver')));
export const paletteTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/Palette/Palette.uni.driver')));
export const warningIndicatorTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/WarningIndicator/WarningIndicator.uni.driver')));
export const variableInputTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/VariableInput/VariableInput.uni.driver')));
export const imageTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/Image/Image.uni.driver')));
export const sidePanelTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/SidePanel/SidePanel.uni.driver')));
export const fontUpgradeTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/FontUpgrade/FontUpgrade.uni.driver')));
export const sideMenuDrillTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Deprecated/SideMenu/DrillView/DrillView.driver')));
export const headerTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Card/Header/Header.driver')));
export const sideMenuTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Deprecated/SideMenu/core/SideMenu.driver')));
export const draggableTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/DragAndDrop/Draggable/Draggable.driver')));
export const editableRowTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/EditableSelector/EditableRow/EditableRow.driver')));
export const fieldLabelAttributesTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/FieldLabelAttributes/FieldLabelAttributes.driver')));
export const fieldWithSelectionCompositeTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/Composite/FieldWithSelectionComposite/FieldWithSelectionComposite.driver')));
export const radioButtonTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/RadioGroup/RadioButton/RadioButton.driver')));
export const messageBoxMarketerialLayoutTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.driver')));
export const messageBoxFunctionalLayoutTestkitFactory = enzymeTestkitFactoryCreator(load(require('../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.driver')));
export const cardSubheaderTestkitFactory = enzymeUniTestkitFactoryCreator(load(require('../src/Card/Subheader/Subheader.uni.driver')));