import { useEffect, useState } from 'react';
import {  Droppable, Draggable } from 'react-beautiful-dnd';
import CheckboxIcon from '@atlaskit/icon/glyph/checkbox';
import ArrowUpIcon from '@atlaskit/icon/glyph/arrow-up';
import MoreIcon from '@atlaskit/icon/glyph/more';
import AvatarGroup from './AvatarGroup';
import { useAppContext } from '../context';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import Image from 'next/image';
import Lozenge from '@atlaskit/lozenge';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import { Y200 } from '@atlaskit/theme/colors';
import Flag from '@atlaskit/flag';

const Board = ({ title: mainTitle, afterTitle, projects: filterProjects }) => {
  const [projects, setProjects] = useState(filterProjects);
  const { search } = useAppContext();
  const [current, setCurrent] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  useEffect(() => {
    if (!search) return setProjects(filterProjects);
    const newFilterProjects = filterProjects.filter((proj) => proj?.title?.toLowerCase()?.includes(search?.toLowerCase()));
    setProjects(newFilterProjects);
  }, [search]);

  return (
    <div className="overflow-scroll max-h-full p-2 m-4 bg-secondary w-56 no-scroll">
      <h1 className="text-gray-500 flex text-sm p-2">
        {mainTitle} <p className="ml-4 text-sm">{afterTitle}</p>
      </h1>

        <Droppable droppableId={mainTitle}>
          {(provided) => {
            return (
              <div className="characters w-52 flex flex-col justify-center items-center" {...provided.droppableProps} ref={provided.innerRef}>
                {projects.map(({ id, title, tech, uri, imgUri }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div
                          onClick={() => {
                            setCurrent({ id, title, tech, uri, imgUri });
                            setIsOpen(true);
                          }}
                          className="w-48 h-32 p-2 bg-white rounded-sm shadow-sm my-2 grid"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <a href="#" className="font-light text-gray-700 text-md hover:underline">
                            {title}
                          </a>
                          <div className="flex">
                            <CheckboxIcon primaryColor="#005ad5" />
                            <ArrowUpIcon primaryColor="tomato" />
                            <div className="flex">
                              <MoreIcon primaryColor="#d54500" />
                              <MoreIcon primaryColor="#d54500" />
                            </div>
                          </div>
                          <div>
                            <AvatarGroup tech={tech} />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      <Dialog isOpen={isOpen} close={close} current={current} />
    </div>
  );
};

const Dialog = ({ isOpen, close, current }) => {
  return (
    <ModalTransition>
      {isOpen && (
        <Modal height={current?.imgUri ? 530 : 350} actions={[{ text: 'Close', onClick: close }, { text: 'Github' }, { text: 'Live' }]} onClose={close} heading={`${current.title}`}>
          <div className="p-2">
            <div>{current?.imgUri ? <Image className="rounded-md overflow-hidden" src={current?.imgUri} width={500} height={250} /> : <Flag appearance="warning" icon={<WarningIcon label="Warning" secondaryColor={Y200} />} id="warning" key="warning" title="TO DO" description="Please check again later." />}</div>
            <div className="py-2">
              {current.tech?.map((t) => (
                <span className="px-1">
                  <Lozenge isBold>{t}</Lozenge>
                </span>
              ))}
            </div>
            <div className="py-2">
              <AvatarGroup tech={current?.tech} size="lg" />
            </div>
          </div>
        </Modal>
      )}
    </ModalTransition>
  );
};

export default Board;
