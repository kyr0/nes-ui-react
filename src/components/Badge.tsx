import { Color } from "./interface/Color";
import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface BadgeProps extends StyleProps, IdProps {
    backgroundColor: Color | string;
    color?: string
    text: string
}

export const Badge = (badgeProps: BadgeProps) =>(
  <span id={badgeProps.id} className={`badge ${badgeProps.className || ''}`} style={{...badgeProps.style, backgroundColor: badgeProps.backgroundColor.startsWith('#') ? badgeProps.backgroundColor : 'inherit'}}>
    <span className={`is-${badgeProps.backgroundColor}`} style={{ color: badgeProps.color}}>{badgeProps.text}</span>
  </span>
);

export interface BadgeSplittedProps extends BadgeProps {
    backgroundColorLeft?: Color
    textLeft: string
    colorLeft?: string
}

export const BadgeSplitted = (badgeSplittedProps: BadgeSplittedProps = {
    backgroundColorLeft: 'black',
    backgroundColor: 'success',
    textLeft: 'left',
    text: 'right',
}) => (
  <span id={badgeSplittedProps.id} className={`badge is-split ${badgeSplittedProps.className || ''}`} style={badgeSplittedProps.style}>
    <span className={`is-${badgeSplittedProps.backgroundColorLeft || 'dark'}`} style={{ color: badgeSplittedProps.colorLeft || '#fff' }}>{badgeSplittedProps.textLeft}</span>
    <span className={`is-${badgeSplittedProps.backgroundColor}`} style={{ color: badgeSplittedProps.color || '#000' }}>{badgeSplittedProps.text}</span>
  </span>
)