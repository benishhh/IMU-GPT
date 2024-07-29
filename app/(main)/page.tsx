import Image from "next/image";
import logobiale from '../../img/logobiale.png'

const ChatPage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="mb-20 dark:filter-none filter invert">
          <Image src={logobiale} alt='IGPT' width={120} />
        </div>
      </div>
    </>
  );
}

export default ChatPage;


