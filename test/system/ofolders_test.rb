require "application_system_test_case"

class OfoldersTest < ApplicationSystemTestCase
  setup do
    @ofolder = ofolders(:one)
  end

  test "visiting the index" do
    visit ofolders_url
    assert_selector "h1", text: "Ofolders"
  end

  test "creating a Ofolder" do
    visit ofolders_url
    click_on "New Ofolder"

    fill_in "Name", with: @ofolder.name
    fill_in "Organisation", with: @ofolder.organisation_id
    fill_in "Parent", with: @ofolder.parent_id
    click_on "Create Ofolder"

    assert_text "Ofolder was successfully created"
    click_on "Back"
  end

  test "updating a Ofolder" do
    visit ofolders_url
    click_on "Edit", match: :first

    fill_in "Name", with: @ofolder.name
    fill_in "Organisation", with: @ofolder.organisation_id
    fill_in "Parent", with: @ofolder.parent_id
    click_on "Update Ofolder"

    assert_text "Ofolder was successfully updated"
    click_on "Back"
  end

  test "destroying a Ofolder" do
    visit ofolders_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ofolder was successfully destroyed"
  end
end
