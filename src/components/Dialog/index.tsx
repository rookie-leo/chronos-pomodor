import type { ToastContentProps } from "react-toastify";
import styles from './styles.module.css'
import { DefaultButton } from "../DefaultButton";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

export function Dialog({  closeToast, data }: ToastContentProps<string>) {
    return (
        <>
            <div className={styles.container}>
                <p>{data}</p>
                <div className={styles.buttonContainer}>
                    <DefaultButton 
                        onClick={() => closeToast(true)}
                        icon={<ThumbsUpIcon />}
                        aria-label="Tem certeza que deseja limpar o histórico?"
                        title="Confirmar ação e fechar"
                    />
                    <DefaultButton 
                        onClick={() => closeToast(false)}
                        icon={<ThumbsDownIcon />}
                        color="red"
                        aria-label="Cancelar ação de limpar histórico"
                        title="Cancelar ação e fechar"
                    />
                </div>
            </div>
        </>
    )
}