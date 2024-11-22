import { NavMenuLink } from "./NavMenuLink"

export function NavMenu({ state }) {
    return (
        <div className={`fixed z-30 w-full bg-transparent bg-[#171717] -translate-y-full ${state ? "translate-y-0" : ""} transition-transform duration-300 ease-out`}>
            <ul className={`w-[1000px] mx-auto mt-[130px] text-[#cfcfcf]`}>
                <NavMenuLink text="Battlegrounds" href="/battlegrounds" />
                <NavMenuLink text="Booster Packs" href="/boosters" />
                <NavMenuLink text="Inventory" href="/inventory" />
                <NavMenuLink text="Free Trade" href="/freetrade" />
            </ul>
        </div>
    )
}