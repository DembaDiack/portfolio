import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const iconsMap = new Map<string, JSX.Element>();

export default function useIcon() {
  const [icon, setIcon] = useState<any>();
  const state = useSelector((state: RootState) => state);

  useEffect(
    function () {
      (async () => {
        const currentStackName =
          state.AppReducer.currentStack[state.AppReducer.stackCounter];
        if (iconsMap.has(currentStackName)) {
          const icon = iconsMap.get(currentStackName);
          setIcon(icon);
        } else {
          const _icon = await import(`../assets/${currentStackName.toLowerCase()}.svg`);
          const _jsx = <img src={_icon.default} width={20} className="rotating"/>
          iconsMap.set(currentStackName,_jsx);
          setIcon(_jsx);
        }
      })();
    },
    [state.AppReducer.stackCounter]
  );

  return icon;
}
