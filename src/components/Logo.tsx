import Image from 'next/image'

interface LogoProps {
    width?: number;
    height?: number;
    className?: string;
}

export default function Logo({ width = 200, height = 200, className = "" }: LogoProps) {
    return (
        <Image
            src="/logo_transparent.png"
            alt="Cydonia Tech Logo"
            width={width}
            height={height}
            className={className}
            priority
        />
    );
}
