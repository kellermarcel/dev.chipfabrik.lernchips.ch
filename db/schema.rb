# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_05_173416) do

  create_table "action_text_rich_texts", charset: "latin1", force: :cascade do |t|
    t.string "name", null: false
    t.text "body", size: :long
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["record_type", "record_id", "name"], name: "index_action_text_rich_texts_uniqueness", unique: true
  end

  create_table "active_admin_comments", charset: "utf8", force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_type"
    t.bigint "resource_id"
    t.string "author_type"
    t.bigint "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id"
  end

  create_table "active_storage_attachments", charset: "latin1", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", charset: "latin1", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.string "service_name", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", charset: "latin1", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "admin_users", charset: "latin1", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

  create_table "content", id: { type: :integer, unsigned: true }, charset: "latin1", force: :cascade do |t|
    t.text "content", size: :long, null: false, collation: "utf8mb4_bin"
    t.text "metadata", size: :long, null: false, collation: "utf8mb4_bin"
    t.string "urlalias"
    t.integer "lernchip_id"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
    t.check_constraint "json_valid(`content`)", name: "CONSTRAINT_1"
    t.check_constraint "json_valid(`content`)", name: "content"
    t.check_constraint "json_valid(`metadata`)", name: "CONSTRAINT_2"
    t.check_constraint "json_valid(`metadata`)", name: "metadata"
  end

  create_table "content_types", charset: "latin1", force: :cascade do |t|
    t.integer "typ"
    t.integer "usertyp"
    t.string "name"
    t.string "original"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "filename"
  end

  create_table "contentarts", charset: "latin1", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "beschreibung"
    t.text "kurzbeschreibung"
  end

  create_table "contenttyparts", charset: "latin1", force: :cascade do |t|
    t.bigint "contentart_id", null: false
    t.bigint "contenttyp_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "topanzeige"
    t.text "kurzbeschreibung"
    t.index ["contentart_id"], name: "index_contenttyparts_on_contentart_id"
    t.index ["contenttyp_id"], name: "index_contenttyparts_on_contenttyp_id"
  end

  create_table "contenttyps", charset: "latin1", force: :cascade do |t|
    t.integer "typ"
    t.integer "usertyp"
    t.string "name"
    t.string "original"
    t.string "filename"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "bemerkung"
    t.boolean "free"
    t.boolean "plus"
    t.boolean "institution"
    t.string "demo"
    t.string "demolink"
    t.text "beschreibung"
    t.text "kurzbeschreibung"
  end

  create_table "courseitems", charset: "latin1", force: :cascade do |t|
    t.integer "course_id", null: false
    t.integer "lernchip_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "position"
  end

  create_table "courses", charset: "utf8", force: :cascade do |t|
    t.string "title"
    t.integer "moodle_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "urlextern"
    t.string "ltisecret", limit: 20
    t.text "fancytree"
    t.integer "ufolder_id"
    t.integer "folder_id", default: 0
    t.index ["user_id"], name: "index_courses_on_user_id"
  end

  create_table "folders", charset: "latin1", force: :cascade do |t|
    t.string "name"
    t.integer "parent_id", default: 0
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "organisation_id", default: 0
  end

  create_table "lernchips", charset: "utf8", force: :cascade do |t|
    t.string "title"
    t.bigint "user_id"
    t.integer "drupal_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "text"
    t.string "urlalias"
    t.integer "organisation_id"
    t.string "ltisecret", limit: 20
    t.integer "contenttyp"
    t.integer "ufolder_id", default: 0
    t.integer "folder_id", default: 0
    t.integer "contenttyp_id"
    t.index ["user_id"], name: "index_lernchips_on_user_id"
  end

  create_table "organisations", charset: "latin1", force: :cascade do |t|
    t.string "name"
    t.string "domain"
    t.string "contactAdmin"
    t.string "contactTech"
    t.string "contactAdminTel"
    t.string "contactTechTel"
    t.integer "pricePlan"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "fancytree"
    t.integer "user_id"
    t.integer "folder_id"
  end

  create_table "subscriptions", charset: "latin1", force: :cascade do |t|
    t.string "plan_id"
    t.integer "user_id"
    t.boolean "active", default: true
    t.datetime "current_period_ends_at"
    t.string "stripe_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "stripe_plan"
    t.string "status"
    t.datetime "trial_ends_at"
    t.datetime "ends_at"
  end

  create_table "typs", charset: "latin1", force: :cascade do |t|
    t.string "contenttyp"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", charset: "utf8", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin", default: false
    t.string "first_name"
    t.string "last_name"
    t.integer "drupalid"
    t.integer "role", default: 0
    t.integer "moodleid"
    t.boolean "nutzung"
    t.boolean "datenschutz"
    t.integer "organisation_id", default: 0
    t.text "fancytree"
    t.string "stripe_id"
    t.integer "subscription_id"
    t.string "subscription_typ"
    t.string "card_brand"
    t.string "card_last4"
    t.string "card_exp_month"
    t.string "card_exp_year"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "usertyps", charset: "latin1", force: :cascade do |t|
    t.string "userart"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "contenttyparts", "contentarts"
  add_foreign_key "contenttyparts", "contenttyps"
  add_foreign_key "courses", "users"
  add_foreign_key "lernchips", "users"
end
