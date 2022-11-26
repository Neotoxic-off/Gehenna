import "../library/styles/Root.css"
import "../library/styles/Grid.css"
import "../library/styles/Panel.css"

import Article from "../library/components/Article";
import Button from "../library/components/Button";

function Home() {
  return (
    <>
      <div className="grid column panel">
        <div className="item article">
          <Article title="Status"
            typetitle="title text-left"
          />
          <div className="item panel">
            <Article description="All platforms"
              typedescription="description text-left"
            />
            <p className="body text-left">
              🔴 Cookie Patcher<br/>
              🟣 Dies Irae<br/>
              🟣 Immunity<br/>
              🔴 Stabbed<br/>
              🟣 Kyrie<br/>
            </p>
          </div>
          <div className="item panel">
            <Article description="Steam"
              typedescription="description text-left"
            />
            <p className="body text-left">
              🔴 Anakata<br/>
            </p>
          </div>
          <div className="item panel">
            <Article description="Epic Games"
              typedescription="description text-left"
            />
            <p className="body text-left">
              🟢 Anakata<br/>
            </p>
          </div>
          <div className="item panel">
            <Article description="Microsoft"
              typedescription="description text-left"
            />
            <p className="body text-left">
              🟢 Anakata<br/>
            </p>
          </div>
        </div>
      </div>
      <div className="grid column panel">
        <div className="item article">
          <Article title="Anakata"
            description="Unlock characters, skins & charms"
            body="Anakata is an unlocker who can give you all the skins, characters and chams temporarily"
            footer="v1.0"

            typetitle="title text-left"
            typedescription="description text-left"
            typebody="body text-left"
            typefooter="footer text-left"
          />
          <Button type="button contained item-left"
            link="https://github.com/Elevatia/panel/releases/download/1.1.0/Ana.Kata.zip"
            text="Download"
          />
          <Button type="button filled item-left margin-left"
            link="https://github.com/Elevatia/anakata"
            text="Source code"
          />
        </div>
      </div>
      <div className="grid column panel">
        <div className="item article">
          <Article title="Cookie Patcher"
            description="Bypass packchunk signature file to get your cookie"
            body="Automatic offset finder injecting bytes in packchunk file to enable peer verification"
            footer="v1.0"

            typetitle="title text-left"
            typedescription="description text-left"
            typebody="body text-left"
            typefooter="footer text-left"
          />
          <Button type="button contained item-left"
            link="https://github.com/Elevatia/panel/releases/download/1.1.0/Cookie.Patcher.zip"
            text="Download"
          />
          <Button type="button filled item-left margin-left"
            link="https://github.com/gehennaclub/Aurora"
            text="Source code"
          />
        </div>
      </div>
      <div className="grid column panel">
        <div className="item article">
          <Article title="Dies Irae"
            description="String extractor from binaries for datamining"
            body="Extract strings from any file using patern matching and ascii validation"
            footer="v1.0"

            typetitle="title text-left"
            typedescription="description text-left"
            typebody="body text-left"
            typefooter="footer text-left"
          />
          <Button type="button contained item-left"
            link="https://github.com/Elevatia/panel/releases/download/1.1.0/Dies.Irae.zip"
            text="Download"
          />
          <Button type="button filled item-left margin-left"
            link="https://github.com/Elevatia/Dies-Irae"
            text="Source code"
          />
        </div>
      </div>
      <div className="grid column panel">
        <div className="item article">
          <Article title="Kyrie"
            description="Heavy client to download cheats"
            body="Client to download all my cheat collection with the latest updates"
            footer="v1.0"

            typetitle="title text-left"
            typedescription="description text-left"
            typebody="body text-left"
            typefooter="footer text-left"
          />
          <Button type="button contained item-left"
            link="https://github.com/Elevatia/panel/releases/download/1.1.0/Kyrie.zip"
            text="Download"
          />
          <Button type="button filled item-left margin-left"
            link="https://github.com/Elevatia/Kyrie"
            text="Source code"
          />
        </div>
      </div>
      <div className="grid column panel">
        <div className="item article">
          <Article title="Immunity"
            description="Unreal Engine configuration builder"
            body="Build own custom engine.ini file configuration"
            footer="v1.0"

            typetitle="title text-left"
            typedescription="description text-left"
            typebody="body text-left"
            typefooter="footer text-left"
          />
          <Button type="button contained item-left"
            link="https://github.com/Elevatia/panel/releases/download/1.1.0/Immunity.zip"
            text="Download"
          />
          <Button type="button filled item-left margin-left"
            link="https://github.com/Elevatia/Immunity"
            text="Source code"
          />
        </div>
      </div>
      <div className="grid column panel">
        <div className="item article">
          <Article title="Stabbed"
            description="Unreal Engine configurations patcher"
            body="Patch your game using custom configuration"
            footer="v1.0"

            typetitle="title text-left"
            typedescription="description text-left"
            typebody="body text-left"
            typefooter="footer text-left"
          />
          <Button type="button contained item-left"
            link="https://github.com/Elevatia/panel/releases/download/1.1.0/Stabbed.zip"
            text="Download"
          />
          <Button type="button filled item-left margin-left"
            link="https://github.com/Elevatia/Stabbed"
            text="Source code"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
