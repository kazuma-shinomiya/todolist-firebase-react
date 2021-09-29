import { signInWithGoogle } from "../service/firebase";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const Header = () => {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
  return (
    <header>
      ヘッダー
      <button onClick={signInWithGoogle}>ログイン</button>
    </header>
  )
}
export default Header;