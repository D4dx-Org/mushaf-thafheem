import { memo } from "react";

import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useDispatch } from "react-redux";

// Corrected: Added an empty line between third-party imports and local imports
import SearchDrawer from "../SearchDrawer/SearchDrawer";
import SettingsDrawer from "../SettingsDrawer/SettingsDrawer";

// Corrected: Ensured there's an empty line between different types of local imports
import styles from "./NavbarBody.module.scss";

import Button, { ButtonShape, ButtonVariant } from "@/dls/Button/Button";
import IconHome from "@/icons/back.svg";
import IconSearch from "@/icons/search.svg";
import IconSettings from "@/icons/settings.svg";
import {
  setIsSettingsDrawerOpen,
  setIsSearchDrawerOpen,
} from "@/redux/slices/navbar";
import { logEvent } from "@/utils/eventLogger";

const logDrawerOpenEvent = (drawerName: string) => {
  logEvent(`drawer_${drawerName}_open`);
};

const NavbarBody: React.FC = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const openSettingsDrawer = () => {
    logDrawerOpenEvent("settings");
    dispatch({ type: setIsSettingsDrawerOpen.type, payload: true });
  };

  const openSearchDrawer = () => {
    logDrawerOpenEvent("search");
    dispatch({ type: setIsSearchDrawerOpen.type, payload: true });
  };

  return (
    <div className={styles.itemsContainer}>
      <div className={styles.centerVertically} />
      <div className={styles.centerVertically}>
        <div className={styles.rightCTA}>
          <>
            <Link href="/" passHref>
              <Button
                tooltip={t("Back")} // Make sure you have a translation for this or adjust accordingly
                shape={ButtonShape.Circle}
                variant={ButtonVariant.Ghost}
                ariaLabel={t("aria.go-home")} // Ensure you have an appropriate aria label
              >
                <IconHome className={styles.iconHome} />
              </Button>
            </Link>

            {/* <LanguageSelector /> */}
            <Button
              tooltip={t("settings.title")}
              shape={ButtonShape.Circle}
              variant={ButtonVariant.Ghost}
              onClick={openSettingsDrawer}
              ariaLabel={t("aria.change-settings")}
            >
              <IconSettings />
            </Button>
            <SettingsDrawer />
          </>
          <>
            <Button
              tooltip={t("search.title")}
              variant={ButtonVariant.Ghost}
              onClick={openSearchDrawer}
              shape={ButtonShape.Circle}
              shouldFlipOnRTL={false}
              ariaLabel={t("search.title")}
            >
              <IconSearch />
            </Button>
            <SearchDrawer />
          </>
        </div>
      </div>
    </div>
  );
};

export default memo(NavbarBody);
