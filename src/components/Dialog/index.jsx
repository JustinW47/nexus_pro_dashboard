import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
} from '@material-tailwind/react';
import { useMode } from 'ModeContext';

export function DialogCustom({
  isOpen,
  header,
  body,
  footer,
  setOpen,
  size,
  isFooter
}) {
  const handleOpen = () => setOpen(!isOpen);
  const { mode } = useMode();

  return (
    <>
      <Dialog
        open={isOpen}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 }
        }}
        size={size ? size : 'md'}
        className={`shadow-none ${
          mode ? ' bg-[#042433] text-white ' : 'bg-[#ffffff]'
        }`}
      >
        <DialogHeader className={`${mode ? 'text-white' : ''}`}>
          {header}
        </DialogHeader>
        <DialogBody className="overflow-y-auto xl:max-h-[500px] max-h-[300px]">
          {body}
        </DialogBody>
        {isFooter ? (
          <DialogFooter>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        ) : null}
      </Dialog>
    </>
  );
}
