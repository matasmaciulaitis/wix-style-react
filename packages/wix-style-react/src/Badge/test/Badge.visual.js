import React from 'react';
import Badge, { SIZE, SKIN, TYPE } from '../index';
import Box from '../../Box';
import { visualize, snap } from 'storybook-snapper';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import CalendarIcon from 'wix-ui-icons-common/Date';

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  visualize(`${themeName ? `${themeName}|` : ''}Badge`, () => {
    snap('base', () =>
      testWithTheme(<BadgesVariations children="Some Badge" />),
    );
    snap('ellipsis', () =>
      testWithTheme(<BadgesVariations children="I'm a Badge with ellipsis!" />),
    );
    snap('Affixes', () =>
      testWithTheme(
        <BadgesVariations
          prefixIcon={<CalendarIcon />}
          suffixIcon={<ChevronDown />}
          children="Some Badge"
        />,
      ),
    );
    snap('focus', () => testWithTheme(<FocusBadgeTest />));
  });

  const skins = Object.keys(SKIN);
  const sizes = Object.keys(SIZE);
  const types = Object.keys(TYPE);

  const renderBadge = props => (
    <span style={{ padding: '5px', maxWidth: '150px' }}>
      <Badge {...props}></Badge>
    </span>
  );

  const renderTypes = props =>
    types.map(type => renderBadge({ type, ...props }));
  const renderSizes = props =>
    sizes.map(size => renderTypes({ size, ...props }));

  class BadgesVariations extends React.Component {
    render() {
      return (
        <div>
          {skins.map(skin => (
            <div key={skin}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '5px',
                }}
                key={skin}
              >
                {renderSizes({ skin, ...this.props })}
                {renderBadge({ uppercase: false, skin, ...this.props })}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }

  class FocusBadgeTest extends React.Component {
    componentDidMount() {
      // TODO - might want to make this focus action as a global driver / using tabs
      document.querySelector('[data-hook="focusable-badge"]').focus();
    }

    render() {
      return (
        <Badge dataHook="focusable-badge" onClick={() => alert(1)}>
          has focus ring on keyboard focus
        </Badge>
      );
    }
  }
};
