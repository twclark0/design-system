import Badge from '@pluralsight/ps-design-system-badge'
import * as core from '@pluralsight/ps-design-system-core'
import { CheckCircleIcon } from '@pluralsight/ps-design-system-icon'
import PropTypes from 'prop-types'
import React from 'react'
import * as Text from '@pluralsight/ps-design-system-text'

import {
  Chrome,
  Code,
  Content,
  P,
  PageHeading,
  SectionHeading
} from '../../src/ui/index.js'

const Palette = props => (
  <div className="palette">
    {props.children}
    <style>{`
      .palette {
        display: flex;
        flex-wrap: wrap;
        margin: calc(-0.5 * ${core.layout.spacingLarge})
          calc(-0.5 * ${core.layout.spacingLarge});
      }
    `}</style>
  </div>
)
Palette.propTypes = {
  children: PropTypes.node
}

const GradientStop = props => (
  <div className="stop">
    {props.children}
    <style jsx>{`
      .stop {
        color: ${core.colors.white};
        white-space: nowrap;
      }
    `}</style>
  </div>
)
GradientStop.propTypes = {
  children: PropTypes.node
}

const GradientVar = props => (
  <div className="var">
    {props.children}
    <style jsx>{`
      .var {
        color: ${core.colors.white};
        white-space: nowrap;
        opacity: 0.75;
        font-size: ${core.type.fontSizeXSmall};
      }
    `}</style>
  </div>
)
GradientVar.propTypes = {
  children: PropTypes.node
}

const Gradient = props => (
  <div
    className="gradient"
    style={{
      background: props.var
    }}
  >
    {props.children}
    <style jsx>{`
      .gradient {
        flex: 1;
        display: flex;
        height: 120px;
        margin: calc(${core.layout.spacingLarge} / 2);
        padding: ${core.layout.spacingLarge} ${core.layout.spacingSmall};
      }
    `}</style>
  </div>
)
Gradient.propTypes = {
  children: PropTypes.node,
  var: PropTypes.string
}

const Swatch = props => (
  <div
    className={`swatch ${props.light ? 'swatchLight' : 'swatchDark'}`}
    style={{ backgroundColor: '#' + props.hex }}
  >
    <div className="hex">{props.hex}</div>
    <div className="var">psColors{props.var}</div>
    <style jsx>{`
      .swatch {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 120px;
        width: 150px;
        padding: ${core.layout.spacingSmall};
        margin: calc(${core.layout.spacingLarge} / 2);
      }
      .swatchLight {
        border: 1px solid ${core.colors.gray01};
      }
      .hex,
      .var {
        white-space: nowrap;
      }
      .var {
        opacity: 0.75;
        font-size: ${core.type.fontSizeXSmall};
      }
      .swatchLight .hex,
      .swatchLight .var {
        color: ${core.colors.gray05};
      }
      .swatchDark .hex,
      .swatchDark .var {
        color: ${core.colors.white};
      }
    `}</style>
  </div>
)
Swatch.propTypes = {
  hex: PropTypes.string,
  light: PropTypes.bool,
  var: PropTypes.string
}

const DarkSwatch = props => <Swatch {...props} />
const LightSwatch = props => <Swatch {...props} light />

function Label(props) {
  return (
    <header>
      <h3>{props.children}</h3>
      <style jsx>{`
        h3 {
          font-size: ${core.type.fontSizeSmall};
          line-height: ${core.type.lineHeightTight};
          margin: ${core.layout.spacingLarge} 0 ${core.layout.spacingXSmall} 0;
        }
      `}</style>
    </header>
  )
}
Label.propTypes = {
  children: PropTypes.node
}

function Swatch2(props) {
  return (
    <div className="swatch">
      <div className="text">
        <div className="name">{props.name}</div>
        <div className="var">CSS: {props.var}</div>
        <div className="var">JS: {props.js}</div>
        <div className="hex">{props.hex}</div>
      </div>
      {props.icon && <div className="icon">{props.icon}</div>}
      {props.borderExample && <div className="borderExample" />}
      <style jsx>{`
        .swatch {
          background: ${props.bg};
          border: ${props.border ? `1px solid ${props.border}` : 'none'};
          color: ${props.fg ? props.fg : core.colorsTextIcon.highOnDark};
          display: ${props.borderExample ? 'display' : 'flex'};
          overflow: hidden;
        }
        .text {
          padding: 14px ${core.layout.spacingSmall};
          flex: 1 1 auto;
        }
        .name {
          font-size: 16px;
          font-weight: 350;
          line-height: ${core.type.lineHeightTight};
          margin-bottom: ${core.layout.spacingXXSmall};
        }
        .var {
          font-size: 11px;
          font-weight: 500;
          line-height: 16px;
          margin-bottom: ${core.layout.spacingXXSmall};
        }
        .hex {
          font-size: ${core.type.fontSizeXSmall};
          font-weight: 500;
          line-height: ${core.type.fontSizeSmall};
        }
        .icon {
          display: flex;
          align-items: center;
          padding-right: ${core.layout.spacingSmall};
        }
        .borderExample {
          height: ${core.layout.spacingXSmall};
          border-top: 1px solid ${props.borderExample};
        }
      `}</style>
    </div>
  )
}
Swatch2.propTypes = {
  border: PropTypes.string,
  bg: PropTypes.string,
  fg: PropTypes.string,
  icon: PropTypes.node,
  borderExample: PropTypes.string,
  name: PropTypes.string.isRequired,
  var: PropTypes.string.isRequired,
  js: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired
}

function Grid(props) {
  return (
    <div className="grid">
      {props.children}
      <style jsx>{`
        .grid {
          display: grid;
          gap: ${props.cols >= 5
            ? 0
            : `${core.layout.spacingMedium} ${core.layout.spacingLarge}`};
          grid-template-columns: repeat(${props.cols}, 1fr);
        }
      `}</style>
    </div>
  )
}
Grid.defaultProps = {
  cols: 3
}
Grid.propTypes = {
  children: PropTypes.node,
  cols: PropTypes.number
}

const colorCategories = [
  {
    heading: 'Background colors',
    explanation: (
      <Text.P>
        There are three background colors available to use for surfaces in the
        app. The lower the number, the lower the elevation of the surface.
        Background 1 Is the app background.
      </Text.P>
    ),
    subCategories: [
      {
        label: 'Dark',
        colors: [
          {
            name: 'Background - Dark 1',
            var: 'psColorsBackgroundDark1',
            js: 'colorsBackgroundDark[1]',
            hex: core.colorsBackgroundDark[1]
          },
          {
            name: 'Background - Dark 2',
            var: 'psColorsBackgroundDark2',
            js: 'colorsBackgroundDark[2]',
            hex: core.colorsBackgroundDark[2]
          },
          {
            name: 'Background - Dark 3',
            var: 'psColorsBackgroundDark3',
            js: 'colorsBackgroundDark[3]',
            hex: core.colorsBackgroundDark[3]
          }
        ]
      },
      {
        label: 'Light',
        fg: core.colorsTextIcon.highOnLight,
        colors: [
          {
            name: 'Background - Light 1',
            var: 'psColorsBackgroundLight1',
            js: 'colorsBackgroundLight[1]',
            hex: core.colorsBackgroundLight[1]
          },
          {
            name: 'Background - Light 2',
            var: 'psColorsBackgroundLight2',
            js: 'colorsBackgroundLight[2]',
            hex: core.colorsBackgroundLight[2]
          },
          {
            name: 'Background - Light 3',
            var: 'psColorsBackgroundLight3',
            js: 'colorsBackgroundLight[3]',
            hex: core.colorsBackgroundLight[3],
            border: core.colorsBorder.lowOnLight
          }
        ]
      }
    ]
  },
  {
    heading: 'Primary action & text link colors',
    subCategories: [
      {
        colors: [
          {
            name: 'Primary Action - Background',
            var: 'psColorsPrimaryActionBackground',
            js: 'colorsPrimaryAction.background',
            hex: core.colorsPrimaryAction.background
          }
        ]
      },
      {
        colors: [
          {
            name: 'Primary Action Text - On Dark',
            var: 'psColorsPrimaryActionTextDarkTheme',
            js: 'colorsPrimaryAction.textDarkTheme',
            hex: core.colorsPrimaryAction.textDarkTheme,
            bg: core.colorsBackgroundDark[1],
            fg: core.colorsPrimaryAction.textDarkTheme
          },
          {
            name: 'Primary Action Text - On Light',
            var: 'psColorsPrimaryActionTextLightTheme',
            js: 'colorsPrimaryAction.textLightTheme',
            hex: core.colorsPrimaryAction.textLightTheme,
            border: core.colorsBorder.lowOnLight,
            bg: core.colorsBackgroundLight[3],
            fg: core.colorsPrimaryAction.textLightTheme
          }
        ]
      }
    ]
  },
  {
    heading: 'Status colors',
    subCategories: [
      {
        colors: [
          {
            name: 'Status - Success',
            var: 'psColorsStatusSuccess',
            js: 'colorsStatus.success',
            hex: core.colorsStatus.success
          },
          {
            name: 'Status - Warning',
            var: 'psColorsStatusWarning',
            js: 'colorsStatus.warning',
            hex: core.colorsStatus.warning,
            fg: core.colorsTextIcon.highOnLight
          },
          {
            name: 'Status - Error',
            var: 'psColorsStatusError',
            js: 'colorsStatus.error',
            hex: core.colorsStatus.error
          },
          {
            name: 'Status - Info',
            var: 'psColorsStatusInfo',
            js: 'colorsStatus.info',
            hex: core.colorsStatus.info
          }
        ]
      }
    ]
  },
  {
    heading: 'Text & icon colors',
    icon: <CheckCircleIcon />,
    subCategories: [
      {
        label: 'On dark backgrounds',
        bg: core.colorsBackgroundDark[1],
        colors: [
          {
            name: 'Text & Icons - On Dark - High Contrast',
            var: 'psColorsTextIconHighOnDark',
            js: 'colorsTextIcon.highOnDark',
            hex: '#FFFFFF, 95% opacity',
            fg: core.colorsTextIcon.highOnDark
          },
          {
            name: 'Text & Icons - On Dark - Low Contrast',
            var: 'psColorsTextIconLowOnDark',
            js: 'colorsTextIcon.lowOnDark',
            hex: '#FFFFFF, 65% opacity',
            fg: core.colorsTextIcon.lowOnDark
          }
        ]
      },
      {
        label: 'On light backgrounds',
        bg: core.colorsBackgroundLight[3],
        border: core.colorsBorder.lowOnLight,
        colors: [
          {
            name: 'Text & Icons - On Light - High Contrast',
            var: 'psColorsTextIconHighOnLight',
            js: 'colorsTextIcon.highOnLight',
            hex: '#000000, 95% opacity',
            fg: core.colorsTextIcon.highOnLight
          },
          {
            name: 'Text & Icons - On Light - Low Contrast',
            var: 'psColorsTextIconLowOnLight',
            js: 'colorsTextIcon.lowOnLight',
            hex: '#000000, 55% opacity',
            fg: core.colorsTextIcon.lowOnLight
          }
        ]
      }
    ]
  },
  {
    heading: 'Border colors',
    subCategories: [
      {
        label: 'On dark backgrounds',
        bg: core.colorsBackgroundDark[1],
        colors: [
          {
            name: 'Border - On Dark - High Contrast',
            var: 'psColorsBorderHighOnDark',
            hex: '#FFFFFF, 30% opacity',
            js: 'colorsTextIcon.highOnDark',
            fg: core.colorsTextIcon.highOnDark,
            borderExample: core.colorsBorder.highOnDark
          },
          {
            name: 'Border - On Dark - Low Contrast',
            var: 'psColorsBorderLowOnDark',
            hex: '#FFFFFF, 15% opacity',
            js: 'colorsTextIcon.lowOnDark',
            fg: core.colorsTextIcon.lowOnDark,
            borderExample: core.colorsBorder.lowOnDark
          }
        ]
      },
      {
        label: 'On light backgrounds',
        bg: core.colorsBackgroundLight[3],
        border: core.colorsBorder.lowOnLight,
        colors: [
          {
            name: 'Border - On Light - High Contrast',
            var: 'psColorsBorderHighOnLight',
            hex: '#000000, 30% opacity',
            js: 'colorsTextIcon.highOnLight',
            fg: core.colorsTextIcon.highOnLight,
            borderExample: core.colorsBorder.highOnLight
          },
          {
            name: 'Border - On Light - Low Contrast',
            var: 'psColorsBorderLowOnLight',
            hex: '#000000, 15% opacity',
            js: 'colorsTextIcon.lowOnLight',
            fg: core.colorsTextIcon.lowOnLight,
            borderExample: core.colorsBorder.lowOnLight
          }
        ]
      }
    ]
  },
  {
    heading: 'Brand gradients',
    subCategories: [
      {
        colors: [
          {
            name: 'Brand Gradient - Skills',
            var: 'psColorsGradientSkillsBackground',
            js: 'colorsGradient.skillsBackground',
            hex: `${core.colorsGradient.skillsStop0} to ${core.colorsGradient.skillsStop100}`,
            bg: core.colorsGradient.skillsBackground
          },
          {
            name: 'Brand Gradient - Flow',
            var: 'psColorsGradientFlowBackground',
            js: 'colorsGradient.flowBackground',
            hex: `${core.colorsGradient.flowStop0} to ${core.colorsGradient.flowStop100}`,
            bg: core.colorsGradient.flowBackground
          }
        ]
      }
    ]
  },
  {
    heading: 'Neutrals',
    subCategories: [
      {
        colors: [
          {
            name: 'Black',
            var: 'psColorsBlack',
            js: 'colorsBlack',
            hex: core.colorsBlack
          },
          {
            name: 'White',
            var: 'psColorsWhite',
            js: 'colorsWhite',
            hex: core.colorsWhite,
            fg: core.colorsTextIcon.highOnLight,
            border: core.colorsBorder.lowOnLight
          }
        ]
      }
    ]
  },
  {
    heading: 'All colors',
    explanation: (
      <Text.P>
        These are additional colors beyond the core set. They can be used for
        things like illustrations, complex data visualizations, etc. Colors
        numbered 6 are the same as base colors. (e.g.,{' '}
        <Text.Code>psColorsBlue6</Text.Code> has the same value as{' '}
        <Text.Code>psColorsBlueBase</Text.Code>)
      </Text.P>
    ),
    subCategories: [
      formatAllColorSubCategory({ color: core.colorsBlue, name: 'Blue' }),
      formatAllColorSubCategory({
        color: core.colorsTeal,
        name: 'Teal',
        fgSwitch: 7
      }),
      formatAllColorSubCategory({
        color: core.colorsGreen,
        name: 'Green'
      }),
      formatAllColorSubCategory({
        color: core.colorsLime,
        name: 'Lime',
        fgSwitch: 8
      }),
      formatAllColorSubCategory({
        color: core.colorsYellow,
        name: 'Yellow',
        fgSwitch: 8
      }),
      formatAllColorSubCategory({
        color: core.colorsOrange,
        name: 'Orange',
        fgSwitch: 7
      }),
      formatAllColorSubCategory({
        color: core.colorsRed,
        name: 'Red'
      }),
      formatAllColorSubCategory({
        color: core.colorsPink,
        name: 'Pink'
      }),
      formatAllColorSubCategory({
        color: core.colorsPurple,
        name: 'Purple'
      })
    ]
  }
]

function formatAllColorSubCategory({ color, fgSwitch, fgMin, fgMax, name }) {
  return {
    cols: 5,
    colors: Object.keys(color)
      .map(key => parseInt(key, 10))
      .filter(key => Number.isInteger(key))
      .map(key => ({
        name: name + ' ' + key + (key === 6 ? ' (Base)' : ''),
        var: 'psColors' + name + key,
        hex: color[key],
        js: `colors${name}[${key}]`,
        fg:
          key < (fgSwitch || 6)
            ? fgMin || core.colorsTextIcon.highOnLight
            : fgMax || core.colorsTextIcon.highOnDark
      }))
  }
}

export default _ => (
  <Chrome>
    <Content title="Color">
      <PageHeading>Color</PageHeading>

      <SectionHeading>Usage</SectionHeading>
      <P>
        Colors are available from the core package. Colors are usable in CSS:
      </P>
      <Code language="css">{`@import "@pluralsight/ps-design-system-core";

.mySelector {
  color: var(--psColorsBlueBase);
}`}</Code>
      <P>Colors are also usable in JavaScript:</P>
      <Code language="js">{`import { 
  colorsBlue, 
  /* other named exports */ 
} from "@pluralsight/ps-design-system-core";

myCssInJsSolution({
  color: colorsBlue.base
})`}</Code>

      {colorCategories.map(cat => {
        return (
          <div key={cat.heading}>
            <SectionHeading>{cat.heading}</SectionHeading>
            {cat.explanation}
            {cat.subCategories.map((subCat, i) => (
              <div key={i}>
                <Label>{subCat.label}</Label>
                <Grid
                  cols={
                    subCat.colors.length < 3
                      ? subCat.colors.length
                      : subCat.cols
                  }
                >
                  {subCat.colors.map(color => (
                    <Swatch2
                      key={color.var}
                      name={color.name}
                      var={color.var}
                      js={color.js}
                      hex={color.hex}
                      icon={color.icon || subCat.icon || cat.icon}
                      border={color.border || subCat.border}
                      fg={color.fg || subCat.fg}
                      bg={color.bg || subCat.bg || color.hex}
                      borderExample={color.borderExample}
                    />
                  ))}
                </Grid>
              </div>
            ))}
          </div>
        )
      })}

      <P>
        The colors listed below are legacy colors, replaced by the colors above.
      </P>

      <SectionHeading
        notice={<Badge color={Badge.colors.yellow}>Deprecated</Badge>}
      >
        Legacy grayscale colors
      </SectionHeading>
      <P>Grayscale colors are used for containers, text, lines and borders.</P>
      <div>
        <Palette>
          <LightSwatch hex="FFFFFF" var="White" />
          <LightSwatch hex="F2F2F2" var="Bone" />
          <DarkSwatch hex="CCCCCC" var="Gray01" />
          <DarkSwatch hex="AAAAAA" var="Gray02" />
          <DarkSwatch hex="555555" var="Gray03" />
          <DarkSwatch hex="363636" var="Gray04" />
          <DarkSwatch hex="222222" var="Gray05" />
          <DarkSwatch hex="181818" var="Gray06" />
          <DarkSwatch hex="000000" var="Black" />
        </Palette>
        <br />
        <Code language="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector {
  color: var(--psColorsGray04);
}`}</Code>
      </div>

      <SectionHeading
        notice={<Badge color={Badge.colors.yellow}>Deprecated</Badge>}
      >
        Legacy UI colors
      </SectionHeading>
      <P>
        UI colors emphasize interface elements such as buttons, links, accents
        and visualization.
      </P>
      <div>
        <Palette>
          <DarkSwatch hex="E80A89" var="Pink" />
          <DarkSwatch hex="DE3636" var="Red" />
          <DarkSwatch hex="F96816" var="Orange" />
          <DarkSwatch hex="FF7B39" var="OrangeLight" />
          <DarkSwatch hex="FFC200" var="Yellow" />
          <DarkSwatch hex="86CE21" var="GreenLight" />
          <DarkSwatch hex="23AA5A" var="Green" />
          <DarkSwatch hex="137BC2" var="Blue" />
        </Palette>

        <br />
        <Code language="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector {
  color: var(--psColorsOrange);
}`}</Code>
      </div>

      <SectionHeading
        notice={<Badge color={Badge.colors.yellow}>Deprecated</Badge>}
      >
        Legacy gradient
      </SectionHeading>
      <P>
        So stale. Use the standard gradient to emphasize and showcase the brand.
        Use sparingly.
      </P>
      <div>
        <Palette>
          <Gradient var={core.colors.gradientHorz}>
            <div>
              <GradientStop>F05A28</GradientStop>
              <GradientVar>psColorsGradientHorz</GradientVar>
            </div>
            <div className="gradientHorzStop2">
              <GradientStop>E80A89</GradientStop>
            </div>
          </Gradient>
          <Gradient var={core.colors.gradientVert}>
            <div className="gradientVert">
              <GradientStop>F05A28</GradientStop>
              <GradientVar>psColorsGradientVert</GradientVar>
              <div className="gradientVertStop2">
                <GradientStop>E80A89</GradientStop>
              </div>
            </div>
          </Gradient>
        </Palette>
        <br />
        <Code language="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector {
  background: var(--psColorsGradientHorz);
}`}</Code>
      </div>
    </Content>

    <style jsx>{`
      .gradientHorzStop2 {
        margin-left: auto;
      }
      .gradientVertStop2 {
        margin-top: auto;
      }
      .gradientVert {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </Chrome>
)
