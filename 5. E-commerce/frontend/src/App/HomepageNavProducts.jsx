import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { CaretDownIcon } from '@radix-ui/react-icons'

export default function HomepageNavProducts({ products, setProducts })
{
    const sortProduct = (choice) =>
    {   
        const check = products.sort((a, b) => choice == 'up' ? a.price - b.price : b.price - a.price)
        setProducts([...check])
    }
    return (
        <div className="p-4 w-fit">
            <h2 className="font-bold">Our Products</h2>
            <NavigationMenu.Root>
                <NavigationMenu.Item className="list-none">
                    <NavigationMenu.Trigger className="flex items-center group">Sort <CaretDownIcon className="group-data-[state=open]:-rotate-180 transition-transform duration-[250] ease-in" /></NavigationMenu.Trigger>
                    <NavigationMenu.Content className="mt-1 shadow-md absolute bg-white">
                        <ul>
                            <li onClick={() => sortProduct('up')} className="p-2 cursor-pointer hover:bg-slate-100 m-1 rounded-md">Lower to high</li>
                            <li onClick={() => sortProduct('down')} className="p-2 cursor-pointer hover:bg-slate-100 m-1 rounded-md">High to lower</li>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
            </NavigationMenu.Root>
        </div>
    )
 }