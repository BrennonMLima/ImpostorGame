import React from 'react';
import { PlayerImage } from '../player-image/player-image';

interface SelectableImageProps {
    src: string;
    alt: string;
    onClick: () => void;
    selected: boolean;
}

const SelectableImage: React.FC<SelectableImageProps> = ({ src, alt, onClick, selected }) => {
    return (
        <PlayerImage
            src={src}
            alt={alt}
            onClick={onClick}
            style={{
                border: selected ? '3px solid #FFD700' : 'none',
                cursor: 'pointer',
            }}
        />
    );
};

export default SelectableImage;
