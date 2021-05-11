import Avatar from '@atlaskit/avatar';
import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import RoadmapIcon from '@atlaskit/icon/glyph/roadmap';
import BacklogIcon from '@atlaskit/icon/glyph/backlog';
import GraphLineIcon from '@atlaskit/icon/glyph/graph-line';
import IssuesIcon from '@atlaskit/icon/glyph/issues';
import ComponentIcon from '@atlaskit/icon/glyph/component';
import UploadIcon from '@atlaskit/icon/glyph/upload';
import ShipIcon from '@atlaskit/icon/glyph/ship';
import PageIcon from '@atlaskit/icon/glyph/page';
import Kanban from './Kanban';
import Image from 'next/image';

const Main = () => {
  return (
    <main className="grid grid-cols-5">
      <div className="col-span-1 h-full">
        <aside className="grid grid-rows-6 h-[calc(100vh-68px)] overflow-hidden bg-[#f4f7fa] border-r-2 border-extra-100 hover:border-blue-200 transition-all">
          <div className="row-span-1 h-full flex flex-col items-center justify-center">
            <div className="flex items-center">
              <div className="pr-4">
                <Image className="rounded-md" src="/rocket.svg" width={35} height={35} />
              </div>
              <div>
                <h1 className="font-bold text-gray-700">SHIVANSH SINGH</h1>
                <p className="text-sm font-light text-gray-500">Frontend Developer 🚀🚀🚀</p>
              </div>
            </div>
          </div>
          <div className="row-span-2 flex flex-col justify-center border-b-2 mx-2">
            <ul>
              <li className="p-1 flex items-center mx-2 rounded-md cursor-pointer my-5 bg-gray-200">
                <span className="px-4">
                  <DashboardIcon primaryColor="#0045ac" />
                </span>
                <p className="text-sm text-primary">Kanban-board</p>
              </li>
              <li className="p-1 flex items-center mx-2 rounded-md cursor-pointer my-5 hover:bg-gray-200">
                <span className="px-4">
                  <RoadmapIcon />
                </span>
                <p className="text-sm text-gray-500">Roadmap</p>
              </li>
              <li className="p-1 flex items-center mx-2 rounded-md cursor-pointer my-5 hover:bg-gray-200">
                <span className="px-4">
                  <BacklogIcon />
                </span>
                <p className="text-sm text-gray-500">Backlog</p>
              </li>
              <li className="p-1 flex items-center mx-2 rounded-md cursor-pointer my-5 hover:bg-gray-200">
                <span className="px-4">
                  <GraphLineIcon />
                </span>
                <p className="text-sm text-gray-500">Reports</p>
              </li>
            </ul>
          </div>
          <div className="row-span-3 flex flex-col justify-center mx-2">
            <ul>
              <li className="p-1 flex items-center mx-2 rounded-md cursor-pointer my-5 hover:bg-gray-200">
                <span className="px-4">
                  <IssuesIcon />
                </span>
                <p className="text-sm text-gray-500">Issues</p>
              </li>
              <li className="p-1 flex items-center mx-2 rounded-md cursor-pointer my-5 hover:bg-gray-200">
                <span className="px-4">
                  <ComponentIcon />
                </span>
                <p className="text-sm text-gray-500">Components</p>
              </li>
              <li className="p-1 flex items-center mx-2 rounded-md cursor-pointer my-5 hover:bg-gray-200">
                <span className="px-4">
                  <UploadIcon />
                </span>
                <p className="text-sm text-gray-500">Deployments</p>
              </li>
              <li className="p-1 flex items-center mx-2 rounded-md cursor-pointer my-5 hover:bg-gray-200">
                <span className="px-4">
                  <ShipIcon />
                </span>
                <p className="text-sm text-gray-500">Releases</p>
              </li>
              <li className="p-1 flex items-center mx-2 rounded-md cursor-pointer my-5 hover:bg-gray-200">
                <span className="px-4">
                  <PageIcon />
                </span>
                <p className="text-sm text-gray-500">Product Pages</p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div className="col-span-4">
        <Kanban />
      </div>
    </main>
  );
};

export default Main;
