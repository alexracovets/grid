import { IoInformationCircleOutline } from "react-icons/io5";

import s from './SideSection.module.scss';
function SideSection() {

    return (
        <aside className={s.side}>
            <h2 className={s.side_title}>
                ОБРАНІ ЛОКАЦІЇ
            </h2>
            <div className={s.side_description}>
                Оберіть зацікавлені локації на мапі, щоб стати міценатом нашої Кефалії
            </div>
            <div className={s.info_section}>
                <IoInformationCircleOutline />
            </div>
        </aside>
    )
}

export default SideSection
