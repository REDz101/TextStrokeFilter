interface TextStrokeFilterProps {
  id?: string;
  color?: string;
  radius?: number;
}

interface TextStrokeFilterProps {
  id?: string;
  strokeColor?: string;
  shadowColor?: string;
  strokeWidth?: number;
  shadowOffset?: number;
}

const TextStrokeFilter: React.FC<TextStrokeFilterProps> = ({
  id = 'text-stroke-filter',
  strokeColor = '#000000',
  shadowColor = '#000000',
  strokeWidth = 2,
  shadowOffset = 2,
}) => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <defs>
      <filter id={id} x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB">
        <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius={strokeWidth} />
        <feFlood floodColor={strokeColor} result="STROKE_COLOR" />
        <feComposite in="STROKE_COLOR" in2="DILATED" operator="in" result="STROKE" />

        <feOffset in="DILATED" dx={shadowOffset} dy={shadowOffset} result="SHADOW_OFFSET" />
        <feFlood floodColor={shadowColor} result="SHADOW_COLOR" />
        <feComposite in="SHADOW_COLOR" in2="SHADOW_OFFSET" operator="in" result="SHADOW" />

        <feMerge>
          <feMergeNode in="SHADOW" />
          <feMergeNode in="STROKE" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

export default TextStrokeFilter;