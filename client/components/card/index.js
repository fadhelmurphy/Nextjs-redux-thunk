import { IdrConvert } from "@helpers/utils";

const Card = ({title, list}) => {

    const total = list.reduce((curr, next) => curr + next.pengeluaraan, 0);
    return (
    <div class="rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <h2 class="font-bold text-xl mb-2">{title}</h2>
      <table class="table-fixed">
  <tbody>
    {list.map((item) => (
        
    <tr>
    <td>{item.jam}</td>
    <td>{item.nama}</td>
    <td>{IdrConvert(item.pengeluaraan)}</td>
  </tr>
    ))}
  </tbody>
</table>
    </div>
    <div class="float-right py-6">
    <p class="font-bold text-xl mb-2">{IdrConvert(total)}</p>
    </div>
  </div>)
}

export default Card;