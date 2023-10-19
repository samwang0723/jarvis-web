import { AsideMenuItemWithSub } from "./AsideMenuItemWithSub";
import { AsideMenuItem } from "./AsideMenuItem";

export function AsideMenuMain() {
    return (
        <>
            <AsideMenuItemWithSub
                to="/dashboards"
                title="Dashboards"
                fontIcon="bi-chat-left"
                icon="/media/icons/duotune/arrows/arr001.svg"
            >
                <AsideMenuItem
                    to="/dashboards/default"
                    title="Default"
                    hasBullet={true}
                />
                <AsideMenuItem
                    to="/dashboards/marketing"
                    title="Marketing"
                    hasBullet={true}
                />
            </AsideMenuItemWithSub>
            <AsideMenuItemWithSub
                to="/crafted/pages"
                title="Pages"
                fontIcon="bi-archive"
                icon="/media/icons/duotune/arrows/arr001.svg"
            >
                <AsideMenuItemWithSub
                    to="/crafted/pages/profile"
                    title="Profile"
                    hasBullet={true}
                >
                    <AsideMenuItem
                        to="/crafted/pages/profile/overview"
                        title="Overview"
                        hasBullet={true}
                    />
                    <AsideMenuItem
                        to="/crafted/pages/profile/projects"
                        title="Projects"
                        hasBullet={true}
                    />
                    <AsideMenuItem
                        to="/crafted/pages/profile/campaigns"
                        title="Campaigns"
                        hasBullet={true}
                    />
                    <AsideMenuItem
                        to="/crafted/pages/profile/documents"
                        title="Documents"
                        hasBullet={true}
                    />
                    <AsideMenuItem
                        to="/crafted/pages/profile/connections"
                        title="Connections"
                        hasBullet={true}
                    />
                </AsideMenuItemWithSub>
            </AsideMenuItemWithSub>

            <AsideMenuItemWithSub
                to="/apps/chat"
                title="Chat"
                fontIcon="bi-chat-left"
                icon="/media/icons/duotune/arrows/arr001.svg"
            >
                <AsideMenuItem
                    to="/apps/chat/private-chat"
                    title="Private Chat"
                    hasBullet={true}
                />
            </AsideMenuItemWithSub>
        </>
    );
}
