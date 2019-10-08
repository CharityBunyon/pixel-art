import '../styles/main.scss';
import grid from './components/grid/grid';
import paintbrush from './components/paintbrush/paintbrush';
import 'bootstrap';


const init = () => {
  grid.makeGrid();
  paintbrush.printColorPicker();
};

init();
