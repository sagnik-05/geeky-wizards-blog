import Image from "next/image";
function Logo(props: any) {
    const {renderDefault, title} = props;
    return (
        <div className="flex items-center space-x-2">
            <Image className="object-cover rounded-full"
            height={70}
            width={70}
            src="/me.jpg"
            alt="logo"/>
        <>{renderDefault (props)}</>
        </div>
 );
}
export default Logo