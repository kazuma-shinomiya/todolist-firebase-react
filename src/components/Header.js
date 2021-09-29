import { signInWithGoogle, logout } from "../service/firebase";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const Header = () => {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);

  const buttonRender = () => {
    return currentUser ? <button onClick={logout}>ログアウト</button> : <button onClick={signInWithGoogle}>ログイン</button>;
  }

  return (
    <header>
      ヘッダー
      {buttonRender()}
    </header>
  )
}
export default Header;