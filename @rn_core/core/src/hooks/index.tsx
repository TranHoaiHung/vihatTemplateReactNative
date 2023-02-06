import {
    useMemo,
    useEffect,
} from "react";
import type { ResourceKey } from "src/PropsTypes";
import { useTranslation as useTranslationI18next } from 'react-i18next';
import { useTheme as useThemeApp, Theme } from "../themes";
import { BackHandler } from "react-native";
import { changeLanguage } from "i18next";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../../../src/store/store'
//Language
export const useTranslation = () => {
    const { t } = useTranslationI18next();
    return t;
};

export const onChangeLanguage = (lng?: string) => {
    changeLanguage(lng);
};

export const useColor = <T extends ResourceKey = {}>() => {
    const { theme } = useThemeApp();
    return theme.color as T;
};

export const useDimension = () => {
    const { theme } = useThemeApp();
    return theme.dimension;
};

export const useStyleSheet = <T extends {}>(fn: (theme: Theme) => T) => {
  const { theme } = useThemeApp();
  const ThemeAwareObject = useMemo(() => fn(theme), [fn, theme]);
  return ThemeAwareObject;
};

// const objCheck = (thing: unknown): any => {
//     if ({}.toString.call(thing) !== '[object Object]') {
//         throw '`useState` only accepts objects.';
//     }
//     return thing;
// };

// export const useState = (initialState = {}) => {
//     const callbackRef = useRef<Function | null>(null);
//     const [value, setValue] = rnUseState(() => objCheck(initialState));

//     useEffect(() => {
//         if (callbackRef.current) {
//             callbackRef.current(value);
//             callbackRef.current = null;
//         }
//     }, [value]);

//     const setStateScreen = useCallback(
//         (objOrFxn: unknown, callback?: Function) => {
//             callbackRef.current = callback || null;
//             return setValue((prevState: unknown) => {
//                 const newState = objCheck(
//                     objOrFxn instanceof Function ? objOrFxn(prevState) : objOrFxn
//                 );
//                 return merge(prevState, newState);
//             });
//         },
//         []
//     );

//     return [value, setStateScreen];
// };

// const objCheck = (thing: unknown): any => {
//     if ({}.toString.call(thing) !== '[object Object]') {
//         throw '`useState` only accepts objects.';
//     }
//     return thing;
// };

// export const useState = (initialState = {}) => {
//     const callbackRef = useRef<Function | null>(null);
//     const [value, setValue] = rnUseState(() => objCheck(initialState));

//     useEffect(() => {
//         if (callbackRef.current) {
//             callbackRef.current(value);
//             callbackRef.current = null;
//         }
//     }, [value]);

//     const setStateScreen = useCallback(
//         (objOrFxn: unknown, callback?: Function) => {
//             callbackRef.current = callback || null;
//             return setValue((prevState: unknown) => {
//                 const newState = objCheck(
//                     objOrFxn instanceof Function ? objOrFxn(prevState) : objOrFxn
//                 );
//                 return merge(prevState, newState);
//             });
//         },
//         []
//     );

//     return [value, setStateScreen];
// };

export const useBackHandler = (handler: () => boolean) => {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handler);

        return () => BackHandler.removeEventListener('hardwareBackPress', handler);
    }, [handler]);
};

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
