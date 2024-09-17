import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import "./Modal.scss";
import clsx from "clsx";
import { ModalHandle } from "./Modal.d";
import { Button } from "../Button";

export const Modal = forwardRef<ModalHandle, React.HTMLProps<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [visible, setVisibile] = useState(false);

    const toggleVisibility = useCallback(() => {
      setVisibile((prevVisible) => !prevVisible);
    }, []);

    useImperativeHandle(ref, () => ({
      element: contentRef.current as HTMLElement,
      setVisibile,
    }));

    const classNames = clsx(
      "modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",
      {
        hidden: !visible,
      }
    );

    return (
      <div
        ref={contentRef}
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={classNames}
        {...props}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <div className="relative bg-white shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={toggleVisibility}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4">{children}</div>
            {/* Modal footer */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <Button onClick={() => setVisibile(false)}>I accept</Button>
              <Button onClick={() => setVisibile(false)}>Decline</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);