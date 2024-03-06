interface titleProps {

    level: number;
    text: string;
    className: string;

}

function Title({ level, text, className }: titleProps) {

    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return <Tag className={className}>{text}</Tag>;

}

export default Title